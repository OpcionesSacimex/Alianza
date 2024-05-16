<?php

namespace App\Http\Controllers\Usuario;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuario;
use Carbon\Carbon;
class UsuarioUtilController extends Controller
{
    public function activar_correo (Request $request ){

        /*$validate = $request->validate([
            "correo"=> 'required',
            "key"=> 'required'
        ]);*/

        $usuario = Usuario::where("correo","=", $request->correo);
        if(is_null($usuario->verify_at)){
            Usuario::where("correo","=", $request->correo)->update([
                "verify_at"=>Carbon::now()
            ]);
            return response()->json(['activo'=>true]);
        }else{
            return response()->json(['activo'=>true]);
        }
    }
    public function activar_numero(){
        
    }
}
