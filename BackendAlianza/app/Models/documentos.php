<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class documentos extends Model
{
    use HasFactory;
    protected $fillable = [
        "cliente_id",
        "status_docs_id",
        "tipo_doc_id",
        "autorizacion"
    ];
    protected $table="documentos";
    protected $primarykey="id";
    public $incrementing= true;
    public $timestamps=false;

    public function cliente(): HasOne{
        return $this->hasOne(Cliente::class);
    }
    public function status(): HasOne {
        return $this->hasOne(Status_docs::class);
    }
    public function tipo(): HasOne {
        return $this->hasOne(Tipo_doc::class);
    }
}
