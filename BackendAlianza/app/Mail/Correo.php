<?php
    namespace App\Mail;
    use Illuminate\Bus\Queueable;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;

    class Correo extends Mailable {
        use Queueable,SerializesModels;

        public $contenido;
        public $asunto;
        public $data;
        public function __construct($asunto,$contenido,$data){
            $this->contenido = $contenido;
            $this->asunto = $asunto;
            $this->data = $data;
        }
        public function build(){
            return $this->subject($this->asunto)->view($this->contenido,$this->data);
        }
    }
?>