<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;
use \Illuminate\Database\Eloquent\Relations\HasMany;
class Persona extends Model
{
    use HasFactory;
    protected $fillable = [
        "nombre",
        "ape_pat",
        "apr_mat",
        "telefono"
    ];
    protected $table="persona";
    protected $primaryKey = "idPersona";
    public $incrementing = true;
    public $timestamps = false;

    public function asesor():HasOne{
        return $this->hasOne(Asesor::class);
    }
    public function cliente():HasOne{
        return $this->hasOne(Asesor::class);
    }
    public function aval(): HasMany{
        return $this->hasMany(Aval::class);
    }
}
