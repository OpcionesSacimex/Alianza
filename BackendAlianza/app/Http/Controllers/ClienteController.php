<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    public function create (Request $request){
        Cliente::create([
            "usuario_id"=>$request->usuario_id,
            "persona_id"=>$request->persona_id,
            "direccion_id"=>$request->direccion_id,
            "economico_id"=>$request->economico_id
        ]);
        return response()->json([
            'status'=>true,
            //'nombre'=> 'nombre'
        ],200);
    }
    public function getCliente(Request $request){
        $id = $request->user()->id;
        $user = Cliente::with('usuario','persona','direccion','economico')->find($id);
        return response()->json($user);
    }
    public function updateClient(Request $request){
        $id = $request->user()->id;
        $cliente = Cliente::with('usuario','persona','direccion','economico')->find($id);
        if (!$cliente) {
            return response()->json(['error' => 'Cliente no encontrado'], 404);
        }
        
        $usuario = $cliente->usuario;
        $persona = $cliente->persona;
        $direccion = $cliente->direccion;
        $economico = $cliente->economico;

        if($usuario){
            $usuario->update([
                "correo"=>$request->input('correo'),
                "password"=>bcrypt($request->input('password')), //encrip
                "rol_id"=>1
            ]);
         }else{
            $usuario->create([
                "correo"=>$request->correo,
                "password"=>bcrypt($request->password), //encrip
                "rol_id"=>1
            ]);
         }
        if ($persona){ 
            $persona->update([
                "nombre"=>$request->input('nombre'),
                "ape_pat"=>$request->input('ape_pat'),
                "apr_mat"=>$request->input('ape_mat'),
                "telefono"=>$request->input('telefono')
            ]);
        }else{
            $persona->create([
                "nombre"=>$request->nombre,
                "ape_pat"=>$request->ape_pat,
                "apr_mat"=>$request->ape_mat,
                "telefono"=>$request->telefono
            ]);
        }
        if($direccion){
           $direccion->update([
                "calle"=>$request->input('calle'),
                "no_exterior"=>$request->input('no_exterior'),
                "no_interior"=>$request->input('no_interior'),
                "cp"=>$request->input('cp'),
                "colonia"=>$request->input('colonia'),
                "latitud"=>$request->input('latitud'), 
                "longitud"=>$request->input('longitud')
           ]);
        }else{
            $direccion->create([
                "calle"=>$request->calle,
                "no_exterior"=>$request->no_exterior,
                "no_interior"=>$request->no_interior,
                "cp"=>$request->cp,
                "colonia"=>$request->colonia,
                "latitud"=>$request->latitud, 
                "longitud"=>$request->longitud
            ]);
        }
        if($economico){
           $economico->update([
                "ingresos_q"=>$request->input('ingresos_q'),
                "disponible_q"=>$request->input('disponible_q'),
                "prestamo_f"=>$request->input('prestamo_f'),
                "plazo_f"=>$request->input('plazo_f'),
                "clabe_int"=>$request->input('clabe_int')
           ]);
        }else{
            $economico->create([
                "ingresos_q"=>$request->ingresos_q,
                "disponible_q"=>$request->disponible_q,
                "prestamo_f"=>$request->prestamo_f,
                "plazo_f"=>$request->plazo_f,
                "clabe_int"=>$request->clabe_int
            ]);
        }
        return response()->json($cliente);
    }
}
