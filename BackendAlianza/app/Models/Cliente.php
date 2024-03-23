<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Cliente extends Model
{
    use HasFactory;

    protected $fillable=[
        "usuario_id",
        "persona_id",
        "direccion_id",
        "economico_id"
    ];
    protected $table="cliente";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = false;
    public function usuario(): BelongsTo{
        return $this->belongsTo(Usuario::class);
    }
    public function persona(): BelongsTo{
        return $this->belongsTo(Persona::class);
    }
    public function direccion(): BelongsTo{
        return $this->belongsTo(Direccion::class);
    }
    public function economico(): BelongsTo{
        return $this->belongsTo(Economico::class);
    }

}
