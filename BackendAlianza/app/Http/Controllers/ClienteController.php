<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Usuario;

class ClienteController extends Controller
{
    public function getCliente(Request $request){
        $id = $request->user()->id;
        $user = Usuario::with('usuario','persona','direccion','economico')->find($id);
        return response()->json($user);
    }
    public function create (Request $request){
        $id = $request->user()->id;
        $userData = [
            "usuario_id"=>$request->user()->id,
            "persona_id"=>$request->user()->id,
            "direccion_id"=>$request->user()->id,
            "economico_id"=>$request->user()->id,
        ];
        Cliente::updateOrCreate(
            ['id' => $id], // Condiciones de búsqueda para el usuario existente
            $userData // Datos a actualizar o crear
        );
    }
}
