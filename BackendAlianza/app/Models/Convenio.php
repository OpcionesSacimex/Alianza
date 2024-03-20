<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
class Convenio extends Model
{
    use HasFactory;

    protected $fillable = [
        "nombre_Conv",
        "asesor_id",
        "taza"
    ];

    protected $table="convenio";
    protected $primaryKey = "id";
    public $incrementing = false;
    public $timestamps = false;

    protected $keyType = 'string';

    public function asesor():BelongsTo {
        return $this->belongsTo(Asesor::class);
    }
}
