<?php

use App\Http\Controllers\cliente\DocumentoController;
use App\Http\Controllers\cliente\StatusController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\DireccionController;
use App\Http\Controllers\EconomicoController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\UploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\Usuario\ExistController;
use Whoops\Run;

//acceso y usuario
Route::post('/usuario/login',[UsuarioController::class,'login']);
Route::middleware('auth:api')->post('/usuario/refresh',[UsuarioController::class,'refresh']);
Route::middleware('auth:api')->get('/usuario/user', [UsuarioController::class,'getUser']);
Route::middleware('auth:api')->post('/usuario/logout', [UsuarioController::class,'logout']);
Route::post('/usuario/createUser',[UsuarioController::class,'create']);

Route::post('/usuario/formulario',[UsuarioController::class,'ingresarPersona']);
Route::post('/usuario/email_verify',[ExistController::class,'validar_correo']);
//clientes
Route::middleware('auth:api')->post('/persona/updateUser', [PersonaController::class,'updateUser']);
Route::post('/persona/createUser',[PersonaController::class,'create']);
Route::get('/cliente/tipo_doc',[DocumentoController::class,'allTipo']);
Route::get('/cliente/status_docs',[StatusController::class,'allStatus']);
//Route::post('/persona/updateUser',[PersonaController::class,'updateUser']);
Route::post('/direccion/createDireccion',[DireccionController::class,'create']);
Route::post('/economico/createEconomico',[EconomicoController::class,'create']);
Route::middleware('auth:api')->post('/cliente/createCliente', [UsuarioController::class,'ingresarPersona']);

Route::middleware('auth:api')->get('/cliente/search', [ClienteController::class,'getCliente']);
Route::middleware('auth:api')->get('/cliente/create', [ClienteController::class,'create']);
Route::post('/usuario/search',[UsuarioController::class,'searchC']);

Route::middleware('auth:api')->post('/cliente/get', [UsuarioController::class,'ingresarPersona']);

Route::post('/documnetos/uploadDocuments',[UploadController::class,'uploadDocument']);
Route::post('/subir','Controller@uploadDocuments')->name('subir'); //pendiente de probar
