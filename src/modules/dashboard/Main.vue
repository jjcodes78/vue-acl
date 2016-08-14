<script>

    import routeMixin from '../../components/mixins/currentRouteMixin'

    export default {
        'extends': routeMixin
    }
</script>

<template>
    <div>
        <!--*****************************************-->
        <!-- INFO PILLS -->
        <div class="row">
            <!-- PILL CLIENTES -->
            <div class="col-md-3">
                <div class="panel panel-primary">
                    <div class="panel-body">
                        <div class="row">
                            <div class="text-center">
                                <strong class="text-primary">Contato de Clientes</strong>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-center text-primary" style="height: 3.4em;">
                                    <i class="glyphicon glyphicon-user" style="font-size: 3em;"></i>
                                    <strong style="font-size: 2.5em;"> : 10</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- PILL EVENTOS APROVADOS -->
            <div class="col-md-3">
                <div class="panel panel-success">
                    <div class="panel-body">
                        <div class="row">
                            <div class="text-center">
                                <strong class="text-success">Eventos Aprovados este Mês</strong>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-center text-success" style="height: 3.4em;">
                                    <i class="glyphicon glyphicon-calendar" style="font-size: 3em;"></i>
                                    <strong style="font-size: 2.5em;"> : 8</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- PILL ORCAMENTOS EM ABERTO -->
            <div class="col-md-3">
                <div class="panel panel-warning">
                    <div class="panel-body">
                        <div class="row">
                            <div class="text-center">
                                <strong class="text-warning">Orçamentos Pendentes no Mês</strong>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-center text-warning" style="height: 3.4em;">
                                    <i class="glyphicon glyphicon-list-alt" style="font-size: 3em;"></i>
                                    <strong style="font-size: 2.5em;"> : 24</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- PILL AVISOS IMPORTANTES -->
            <div class="col-md-3">
                <div class="panel panel-danger">
                    <div class="panel-body">
                        <div class="row">
                            <div class="text-center">
                                <strong class="text-danger">Avisos Importantes</strong>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-center text-danger" style="height: 3.4em;">
                                    <i class="glyphicon glyphicon-exclamation-sign" style="font-size: 3em;"></i>
                                    <strong style="font-size: 2.5em;"> : 4</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>