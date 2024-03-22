<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::post('/usuario/createUser',[UsuarioController::class,'store']);;

Route::middleware('auth:api')->get('/user',function(Request $request){
    return $request->user();
});

Route::post('/login',function(Request $request){
    $credentials = $request->only(['correo','password']);

    $token = auth('api')->attempt($credentials);
    
    if ($token==false){
        abort(401,'Unauthorized');
    }
    return response()->json([
        'data' =>[
            'token'=> $token,
            'token_type' => 'bearer',
            'expires_in' => 60
        ]
    ]);
});