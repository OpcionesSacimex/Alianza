<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Direccion;

class DireccionController extends Controller
{
    public function create (Request $request){
        Direccion::create([
            "calle"=>$request->calle,
            "no_exterior"=>$request->no_exterior,
            "no_interior"=>$request->no_interior,
            "cp"=>$request->cp,
            "colonia"=>$request->colonia,
            "latitud"=>$request->latitud, 
            "longitud"=>$request->longitud
        ]);

        return response()->json([
            'status'=>true,
            'nombre'=> 'nombre'
        ],200);
    }
}
