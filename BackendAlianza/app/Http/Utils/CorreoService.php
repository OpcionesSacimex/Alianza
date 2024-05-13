<?php
namespace App\Http\Utils;
    use Illuminate\Support\Facades\Mail;
    use App\Mail\Correo;

    class CorreoService {
        public function enviarCorreo($destinatario,$contenido, $asunto,$data){
            Mail::to($destinatario)->send(new Correo($asunto,$contenido, $data));
        }
    }
?>