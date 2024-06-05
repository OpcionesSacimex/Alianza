<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Usuario;
use App\Models\Economico;
class ClienteController extends Controller
{
    public function getCliente(Request $request){
        $id = $request->user()->id;
        $user = Usuario::with('usuario','persona','direccion','economico')->find($id);
        return response()->json($user);
    }
    public function solicitudCreate (Request $request){
        $id = $request->user()->id;

        $economico=$request->economico;
        $economico['plazo_f']=$request->plazo;

        $persona= Cliente::where('usuario_id',"=",$id)->first();

        if($persona->economico_id){
            Cliente::where('usuario_id',"=",$id)->update([$economico]);
        }else{
            $eco=Economico::create($economico);
            Cliente::where('usuario_id',"=",$id)->update([
                "economico_id"=>$eco->id
            ]);
        }

        return response()->json([
            'status'=>true,
        ],200);
    }
    public function createDireccion(Request $request){
        $id = $request->user()->id;
        $ubivacion = $request->direccion['ubicacion'];
        $direccion = $request->direccion;
        $userData = [
            "calle"=>$request->calle,
            "no_exterior"=>$request->no_exterior,
            "no_interior"=>$request->no_interior,
            "cp"=>$request->cp,
            "colonia"=>$request->colonia,
            "latitud"=>$request->latitud, 
            "longitud"=>$request->longitud
        ];
        Direccion::updateOrCreate(
            ['id' => $id], // Condiciones de búsqueda para el usuario existente
            $userData // Datos a actualizar o crear
        );
        return response()->json(['message' => 'Usuario actualizado o creado correctamente'], 200);
    }
}
