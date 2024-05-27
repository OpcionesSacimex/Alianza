<?php

namespace App\Http\Controllers\Usuario;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Correo;
use App\Models\Telefono;
class ExistController extends Controller
{
    public function validar_correo (Request $request ){
        $correo= Correo::where('correo','=',$request->correo)->first();
        $existe = is_null($correo);
        return response()->json(['existe'=>$existe!=1]);
    }

    public function validar_numero (Request $request ){
        $telefono= Telefono::where('numero','=',$request->telefono)->first();
        $existe = is_null($telefono);
        return response()->json(['existe'=>$existe!=1]);
    }
}
