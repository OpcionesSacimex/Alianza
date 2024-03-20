<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
use \Illuminate\Database\Eloquent\Relations\HasMany;
class Asesor extends Model
{
    use HasFactory;

    protected $filltable = [
        "usuario_idUsuario",
        "persona_idPersona"
    ];
    protected $table="asesor";
    protected $primaryKey = "idAsesor";
    public $incrementing = true;
    public $timestamps = false;

    public function persona(): BelongsTo{
        return $this->belongsTo(Persona::class);
    }
    public function usuario():BelongsTo {
        return $this->belongsTo(Usuario::class);
    }
    public function convenio(): HasMany {
        return $this->hasMany(Convenio::class);
    }
}
