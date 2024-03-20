<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;
class Usuario extends Model
{
    use HasFactory;
    protected $fillable = [
        "correo",
        "password"
    ];
    protected $table="usuario";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = false;

    public function asesor ():HasOne{
        return $this->hasOne(Asesor::class);
    }
    public function cliente (): HasOne{
        return $this->hasOne(Cliente::class);
    }
}
