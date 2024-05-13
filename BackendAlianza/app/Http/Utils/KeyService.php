<?php
namespace App\Http\Utils;
    use Illuminate\Support\Facades\Mail;
    use App\Mail\Correo;

    class KeyService {
        public function KEY_GENERATE($len){
            $caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $longitud_caracteres = strlen($caracteres);
		    $cadena_aleatoria = '';
		    for ($c = 0; $c < $len; $c++) {
			    $cadena_aleatoria .= $caracteres[random_int(0, $longitud_caracteres - 1)];
		    }
		    return $cadena_aleatoria;
        }
    }
?>