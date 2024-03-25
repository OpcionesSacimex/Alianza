<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

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
        ]);
        
        return response()->json([
            'status'=>true,
            'Ares'=>"sads"
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
    public function getUser(Request $request){
        $id = $request->user()->id;
        $user = Usuario::with('cliente')->find($id);
        return response()->json([$user]);
        //Usuario::find($id);
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
