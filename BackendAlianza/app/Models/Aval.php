<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
class Aval extends Model
{
    use HasFactory;

    protected $fillable = [
        "persona_id",
        "clientes_id"
    ];
    protected $table="aval";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = false;

    public function cliente(): BelongsTo{
        return $this->belongsTo(Cliente::Class);
    }
}
