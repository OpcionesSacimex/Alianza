<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Usuario;
use App\Models\Economico;
use App\Models\Direccion;
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
            Economico::where('id',"=",$persona->economico_id)->update([$economico]);
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

        $persona= Cliente::where('usuario_id',"=",$id)->first();

        $ubicacion = $request->direccion['ubicacion'];
        
        $direccion = $request->direccion;
        $dirData = [
            "colonia"=>$direccion['colonia'],
            "calle"=>$direccion['calle'],
            "cp"=>$direccion['cp'],
            "no_exterior"=>$direccion['no_exterior'],
            "no_interior"=>$direccion['no_interior'],
            "latitud"=>$ubicacion[0], 
            "longitud"=>$ubicacion[1] 
        ];
        if($persona->direccion_id){
            Direccion::where('id',"=",$persona->direccion_id)->update($dirData);
        }else{
            $eco=Direccion::create($dirData);
            Cliente::where('usuario_id',"=",$id)->update([
                "direccion_id"=>$eco->id
            ]);
        }
        return response()->json(['message' => 'Usuario actualizado o creado correctamente'], 200);
    }
}
