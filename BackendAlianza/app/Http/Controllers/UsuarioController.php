<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Models\Usuario;
Use App\Models\Direccion;
use App\Models\Economico;
Use App\Models\Persona;
Use App\Models\Correo;
Use App\Models\Telefono;
use App\Http\Utils\CorreoService;
use App\Http\Utils\KeyService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class UsuarioController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','create']]);
    }
    public function create(Request $request){
        $correo = new CorreoService();
        $key = (new KeyService())->KEY_GENERATE(20);

        $cor = Correo::create([
            "correo"=>$request->correo,
            "token"=>$key,
            "validate"=>NULL
        ]);

        $cor = Correo::where("correo","=",$request->correo)->first();
        
        $tel = Telefono::create([
            "numero"=>$request->telefono,
        ]);
        $tel = Telefono::where("numero","=",$request->telefono)->first();
        $rol = 1;
        if(preg_match("/@opcionessacimex.com/", $request->correo)){
            if(preg_match("/sistemas/", $request->correo)){
                $rol=3;
            }else{
                $rol=2;
            }
        }


        Usuario::create([
            "password"=>bcrypt($request->password), //encrip
            "correo_id"=>$cor->id,
            "telefono_id"=>$tel->id,
            "rol_id"=>$rol,
            "convenio"=>$request->convenio
        ]);
       $correo->enviarCorreo($request->correo,"VarificarCorreo","Verificar usuario",
       ["key"=>$key,
        "origen"=>env("ORIGIN_URL") . "home/validate"]);
        
        return response()->json([
            'status'=>true,
        ],200);
    }
    public function login(Request $request){
        $credentials = $request->only(['correo','password']);

        //$user = Usuario::where(function ($query) use ($input){

        //});
        $user = Usuario::leftJoin('correo', 'usuario.correo_id', '=', 'correo.id')
            ->leftJoin('telefono', 'usuario.telefono_id', '=', 'telefono.id')
            ->where(function ($query) use ($credentials) {
                $query->where('correo.correo', $credentials['correo'])
                      ->orWhere('telefono.numero', $credentials['correo']);
            })
            //->where('usuario.password', $request['password'])
            ->select('usuario.*')
            ->first();

            if ($user && Hash::check($request['password'], $user->password)) {
                // Generar token
                $token = auth('api')->attempt(["password"=>$request['password'],"correo_id"=>$user->correo_id,"telefono_id"=>$user->telefono_id]);
                if($token == false){
                    abort(401,'Unauthorized');
                }else{
                    return response()->json([
                        'token'=> $token,
                        'token_type' => 'bearer',
                        'expires_in' => auth('api')->factory()->getTTL()
                    ]);
                    //return response()->json($user); 
                }
                
                // Retornar el usuario con el token
                return response()->json(compact('user', 'token'));
            } else {
                abort(401,'Unauthorized');
            }

        //return response()->json(["user"=>$user,"pass"=>$request['password'],"cor"=> $credentials['correo']]);
        
        //with(["correo"])-> where('correo',$credentials['correo'])
        //->orWhere('numero',$credentials['correo'])->first();

        //$token = auth('api')->attempt($user);
    
        //if ($token==false){
        //    abort(401,'Unauthorized');
        //}
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
