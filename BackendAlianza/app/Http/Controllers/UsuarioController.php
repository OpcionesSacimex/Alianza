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
    public function ingresarPersona(Request $request){
        $id = $request->user()->id;
        Persona::create([
            "nombre"=>$request->nombre,
            "ape_pat"=>$request->ape_pat,
            "apr_mat"=>$request->apr_mat,
            "telefono"=>$request->telefono
        ]);
        Direccion::create([
            "calle"=>$request->calle,
            "no_exterior"=>$request->no_exterior,
            "no_interior"=>$request->no_interior,
            "cp"=>$request->cp,
            "colonia"=>$request->colonia,
            "latitud"=>$request->latitud, 
            "longitud"=>$request->longitud
        ]);
        Economico::create([
            "ingresos_q"=>$request->ingresos_q,
            "disponible_q"=>$request->disponible_q,
            "prestamo_f"=>$request->prestamo_f,
            "plazo_f"=>$request->plazo_f,
            "clabe_int"=>$request->clabe_int
        ]);

        return response()->json([
            'status'=>true,
        ],200);
    }
    public function getUser(Request $request){
        $id = $request->user()->id;
        $user = Usuario::with('rol')->find($id);
        return response()->json($user);
        
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
