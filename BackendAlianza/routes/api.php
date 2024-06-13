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
use App\Http\Controllers\Usuario\UsuarioUtilController;
use App\Http\Controllers\convenio\ConvenioController;
use Whoops\Run;

//acceso y usuario
Route::post('/usuario/createUser',[UsuarioController::class,'create']);
Route::post('/usuario/login',[UsuarioController::class,'login']);
Route::middleware('auth:api')->get('/usuario/user', [UsuarioController::class,'getUser']);
Route::middleware('auth:api')->post('/usuario/refresh',[UsuarioController::class,'refresh']);
Route::middleware('auth:api')->post('/usuario/logout', [UsuarioController::class,'logout']);
Route::post('/usuario/email_verify',[ExistController::class,'validar_correo']);
Route::post('/usuario/numero_verify',[ExistController::class,'validar_numero']);

//clientes
Route::middleware('auth:api')->post('/persona/updateUser', [PersonaController::class,'updateUser']);
Route::middleware('auth:api')->post('/cliente/solicitudCreate', [ClienteController::class,'solicitudCreate']);
Route::middleware('auth:api')->post('/cliente/createDireccion',[ClienteController::class,'createDireccion']);
Route::middleware('auth:api')->post('/cliente/get', [UsuarioController::class,'ingresarPersona']);
//Conbenios
Route::get('/convenios/getAll',[ConvenioController::class,'allConvenios']);
Route::get('/convenios/existe',[ConvenioController::class,'existe']);
Route::get('/convenios/data',[ConvenioController::class,'getConvenioData']);

//Revisar

Route::post('/documnetos/uploadDocuments',[UploadController::class,'uploadDocument']);

//Route::post('/economico/createEconomico',[EconomicoController::class,'create']);



Route::post('/usario/activarcorreo',[UsuarioUtilController::class,'activar_correo']);

//Route::post('/persona/createUser',[PersonaController::class,'create']);
Route::get('/cliente/tipo_doc',[DocumentoController::class,'allTipo']);
Route::get('/cliente/status_docs',[StatusController::class,'allStatus']);
//Route::post('/persona/updateUser',[PersonaController::class,'updateUser']);


Route::middleware('auth:api')->post('/cliente/createCliente', [UsuarioController::class,'ingresarPersona']);

Route::middleware('auth:api')->get('/cliente/search', [ClienteController::class,'getCliente']);

Route::post('/usuario/search',[UsuarioController::class,'searchC']);




//Route::post('/subir','Controller@uploadDocuments')->name('subir'); //pendiente de probar
//Route::post('/usuario/formulario',[UsuarioController::class,'ingresarPersona']);
