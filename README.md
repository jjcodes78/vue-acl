# Vue for ACL-Defender

> FrontEnd com VueJS e ACL (para Artesaos/Defender)

## Build Setup

``` bash
# install dependencies
npm install

#compile dependencies
gulp

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
# Configuring the Api (Laravel)

## Install JWT-Auth and Artesaos/Defender

Run in terminal:

`composer require tymon/jwt-auth`

`composer require artesaos/defender`

Configure the JWT-Auth. See [howto](https://github.com/tymondesigns/jwt-auth/wiki). JWT-Auth [github](https://github.com/tymondesigns/jwt-auth). 

Configure the Defender. See [howto](https://github.com/artesaos/defender)

## Setup a AuthenticateController (Laravel)

In your `AuthController` or create a new `AuthenticateController` and put the code above:

```
    public function authenticate(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        try {
            if (! Auth::once($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], Response::HTTP_UNAUTHORIZED);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $user = Auth::user()->first(['id', 'name', 'email']);
        $token = JWTAuth::fromUser($user);
        $permissions = array_map(function ($permission) {
           return $permission['name'];
        }, $user->getAllPermissions()->toArray());

        return response()->json([
            'token' => $token,
            'user' => $user,
            'permissions' => $permissions
        ]);
    }
    
    public function unauthenticate()
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json('user_logged_out');
    }
    
    public function getAuthenticatedUser()
    {
        try {

            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['error' => 'user_not_found'], 404);
            }

            $permissions = array_map(function ($permission) {
                return $permission['name'];
            }, $user->getAllPermissions()->toArray());

        } catch (TokenExpiredException $e) {

            return response()->json(['error' => 'token_expired'], $e->getStatusCode());

        } catch (TokenInvalidException $e) {

            return response()->json(['error' => 'token_invalid'], $e->getStatusCode());

        } catch (JWTException $e) {

            return response()->json(['error' => 'token_absent'], $e->getStatusCode());

        }

        // the token is valid and we have found the user via the sub claim
        return response()->json(['user' => $user, 'permissions' => $permissions]);
    }
```

## Setting the routes

Put current routes into your routes file:

```
  /*
   * AUTH ROUTES
   */
  Route::post('auth', 'YOUR_AUTH_CONTROLLER@authenticate');
  Route::get('auth/logout', 'YOUR_AUTH_CONTROLLER@unauthenticate');
  Route::get('auth/profile', 'YOUR_AUTH_CONTROLLER@getAuthenticatedUser');
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).
