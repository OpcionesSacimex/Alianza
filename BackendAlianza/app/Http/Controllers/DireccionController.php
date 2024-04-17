<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Direccion;

class DireccionController extends Controller
{
    public function create (Request $request){
        $id = $request->user()->id;
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
