<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function index(){
        return response()->json([
            'status'=>true,
            'ARES'=>"NOP"
        ],200);
    }
    public function store(Request $request){
        Usuario::create([
            "correo"=>$request->correo,
            "password"=>$request->password,
        ]);
        return response()->json([
            'status'=>true,
            'ARES'=>"NOP"
        ],200);
    }
    public function show($id){
        return response()->json([
            'status'=>true,
            'ARES'=>"NOP"
        ],200);
    }
    public function edit($id){
        return response()->json(['status'=>true],200);
    }
    public function update(Request $request, $id){
        return response()->json(['status'=>true],200);
    }
    public function destroy($id){
        return response()->json(['status'=>true],200);
    }
}
