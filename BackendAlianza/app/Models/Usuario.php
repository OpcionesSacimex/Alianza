<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Usuario extends Authenticatable implements JWTSubject
{
    use HasFactory;
    protected $fillable = [
        "correo",
        "password",
        'rol_id',
    ];
    protected $hidden = [
        'password',
        'remember_token',
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
    public function rol(): BelongsTo{
        return $this->belongsTo(Rol::class);
    }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
