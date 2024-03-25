<?php

use App\Http\Controllers\DireccionController;
use App\Http\Controllers\EconomicoController;
use App\Http\Controllers\PersonaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use Whoops\Run;

//acceso y usuario
/*Route::prefix([
    'middleware' => 'api',
    'prefix' => 'auth'
])->group(function () {
    //Route::post('/usuario/login', [suarioController::class,'login']);
    Route::post('/usuario/logout', [UsuarioController::class,'logout']);
    Route::post('/usuario/refresh',[UsuarioController::class,'refresh']);
    Route::post('/usuario/user', [UsuarioController::class,'getUser']);
});*/


//Route::post('/usuario/createUser',[UsuarioController::class,'create']);
//Route::middleware('auth:api')->get('/usuario/user',[UsuarioController::class,'getUser']);
Route::post('/usuario/login',[UsuarioController::class,'login']);
Route::post('/usuario/refresh',[UsuarioController::class,'refresh']);
Route::middleware('auth:api')->get('/usuario/user', [UsuarioController::class,'getUser']);
Route::post('/usuario/logout', [UsuarioController::class,'logout']);




Route::post('/persona/createUser',[PersonaController::class,'create']);
Route::post('/direccion/createDireccion',[DireccionController::class,'create']);
Route::post('/economico/createEconomico',[EconomicoController::class,'create']);