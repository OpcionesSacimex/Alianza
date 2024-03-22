<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::post('/usuario/createUser',[UsuarioController::class,'create']);
Route::middleware('auth:api')->get('/usuario/user',[UsuarioController::class,'getUser']);
Route::post('/usuario/login',[UsuarioController::class,'login']);