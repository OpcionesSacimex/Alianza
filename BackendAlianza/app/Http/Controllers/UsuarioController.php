<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Models\Usuario;
Use App\Models\Direccion;
use App\Models\Economico;
Use App\Models\Persona;

class UsuarioController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','create']]);
    }
    public function create(Request $request){
        Usuario::create([
            "correo"=>$request->correo,
            "password"=>bcrypt($request->password), //encrip
            "rol_id"=>1
        ]);
        
        return response()->json([
            'status'=>true,
        ],200);
    }
    public function login(Request $request){
        $credentials = $request->only(['correo','password']);

        $token = auth('api')->attempt($credentials);
    
        if ($token==false){
            abort(401,'Unauthorized');
        }
        //dulio aqui >:(
        return response()->json([
                'token'=> $token,
                'token_type' => 'bearer',
                'expires_in' => auth('api')->factory()->getTTL()
            ]);
    }
    public function searchC(Request $request){
        $credentials = $request->only(['correo','password']);

        $token = auth('api')->attempt($credentials);
        $id = $request->user()->id;
        $user = Usuario::with('cliente')->find($id);

        if ($token==false){
            abort(401,'Unauthorized');
        }
        
        return response()->json($user); 
    }

    public function ingresarPersona(Request $request){
        $id = $request->user()->id;
        Persona::create([
            "id"=>$request->user()->id,
            "nombre"=>$request->nombre,
            "ape_pat"=>$request->ape_pat,
            "apr_mat"=>$request->ape_mat,
            "telefono"=>$request->telefono
        ]);

       // $direccion = $request['direccion'];
        //echo($direccion);
        Direccion::create([
            "id"=>$request->user()->id,
            "calle"=>$request->direccion['calle'],
            "no_exterior"=>$request->direccion['no_exterior'],
            "no_interior"=>$request->direccion['no_interior'],
            "cp"=>$request->direccion['cp'],
            "colonia"=>$request->direccion['colonia'],
            "latitud"=>'12345678',
            "longitud"=>'12345678'
        ]);
        Economico::create([
            "id"=>$request->user()->id,
            "ingresos_q"=>$request->economico['ingreso_q'],
            "disponible_q"=>$request->economico['disponible_q'],
            "prestamo_f"=>$request->economico['prestamo_f'],
            "plazo_f"=>$request->plazo,
            "clabe_int"=>'12345678'
        ]);

        return response()->json([
            'status'=>true,
        ],200);
    }
    public function getUser(Request $request){
        $id = $request->user()->id;
        $user = Usuario::with('rol')->find($id);
        return response()->json([$user,'id'=> $id]);
    }
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL()
        ]);
    }

}
