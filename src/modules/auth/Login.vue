<script>
    import notificationService from '../../services/notificationService'
    import authService from '../../services/authService'
    import { DASHBOARD_URL } from '../dashboard/router/paths'

    import routeMixin from '../../components/mixins/currentRouteMixin'

    import Vue from 'vue'

    Vue.directive('validation', {
        update: function () {
            window.console.log(this.el.querySelector('.ui-textbox-input').attributes);
        },

        params: [ 'is-valid', 'is-dirty'],

        paramWatchers: {
            isValid(val, oldVal) {
                window.console.log(val, oldVal);
            },

            isDirty(val, oldVal) {
                window.console.log(val, oldVal);
            }
        }

    })

    export default{

        extends: routeMixin,

        data () {
            return {
                email: '',
                password: '',
                error: ''
            }
        },

        methods: {
            /**
             *  Verifica se o campo está com erro
             *
             * @param field
             * @returns {*}
             */
            invalid (field) {
                return field.dirty && field.invalid
            },

            /**
             * Envia as informações de login para o servidor
             */
            submit() {

                let formBody = {
                    email: this.email,
                    password: this.password
                }

                authService.login(formBody).then(function (res) {
                    let token = res.data.token
                    let user = res.data.user
                    let permissions = res.data.permissions

                    if(token !== undefined ) {
                        authService.set('token', token)
                        authService.setUser(user, permissions)
                        notificationService.show(notificationService.common.USER_LOGGED_IN)
                        this.$router.go(DASHBOARD_URL)
                    }
                }.bind(this)).catch(function (res) {
                    if( res.status == 401 ) {
                        notificationService.show(notificationService.common.INVALID_CREDENTIALS)
                    }
                    if( res.status == 0 ) {
                        notificationService.show(notificationService.common.CONNECTION_ERROR)
                    }
                }.bind(this))
            }
        }
    }
</script>

<template>
    <div>
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-primary">
                <div class="panel-body">
                    <validator name="login">
                        <form novalidate>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group has-feedback" :class="{ 'has-error': invalid($login.email) }">
                                        <label for="email" class="input-control">E-Mail:</label>
                                        <input type="text"
                                               name="email"
                                               class="form-control"
                                               v-model="email"
                                               v-validate:email="['required']" />
                                        <i class="form-control-feedback glyphicon glyphicon-remove"
                                           v-if="invalid($login.email)"></i>
                                    </div>
                                    <div class="form-group has-feedback" :class="{ 'has-error': invalid($login.password) }">
                                        <label for="password" class="input-control">Senha:</label>
                                        <input type="password"
                                               name="password"
                                               class="form-control"
                                               v-model="password"
                                               v-validate:password="{ required: true, minlength: 4 }" />
                                        <i class="form-control-feedback glyphicon glyphicon-remove"
                                           v-if="invalid($login.password)"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <ui-button @click.prevent="submit"
                                               :disabled="!$login.valid"
                                               :raised="true"
                                               color="success"
                                               icon="person"
                                               text="Entrar"
                                    ></ui-button>
                                </div>
                            </div>
                        </form>
                    </validator>
                </div>
            </div>
        </div>
    </div>
</template>