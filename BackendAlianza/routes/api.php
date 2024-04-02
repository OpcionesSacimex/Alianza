<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\DireccionController;
use App\Http\Controllers\EconomicoController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\UploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use Whoops\Run;

//acceso y usuario
Route::post('/usuario/login',[UsuarioController::class,'login']);
Route::middleware('auth:api')->post('/usuario/refresh',[UsuarioController::class,'refresh']);
Route::middleware('auth:api')->get('/usuario/user', [UsuarioController::class,'getUser']);
Route::middleware('auth:api')->post('/usuario/logout', [UsuarioController::class,'logout']);
Route::post('/usuario/createUser',[UsuarioController::class,'create']);

Route::post('/usuario/formulario',[UsuarioController::class,'ingresarPersona']);

Route::post('/persona/createUser',[PersonaController::class,'create']);
Route::post('/direccion/createDireccion',[DireccionController::class,'create']);
Route::post('/economico/createEconomico',[EconomicoController::class,'create']);
Route::post('/cliente/createCliente',[ClienteController::class,'create']);
Route::middleware('auth:api')->get('/cliente/get', [ClienteController::class,'getCliente']);

Route::post('/documnetos/uploadDocuments',[UploadController::class,'uploadDocument']);
Route::post('/subir','Controller@uploadDocuments')->name('subir');