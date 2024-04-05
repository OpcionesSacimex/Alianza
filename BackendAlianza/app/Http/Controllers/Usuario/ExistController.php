<?php

namespace App\Http\Controllers\Usuario;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuario;
class ExistController extends Controller
{
    public function validar_correo (Request $request ){
        $usuario= Usuario::where('correo','=',$request->correo)->first();
        $existe = is_null($usuario);
        return response()->json(['existe'=>$existe!=1]);
    }
}
