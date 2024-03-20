<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('direccion', function (Blueprint $table) {
            $table->id();
            $table->string("calle",45);
            $table->string("no_exterior",8);
            $table->string("no_interior",8);
            $table->string("cp",5);
            $table->string("colonia",45);
            $table->string("latitud",45);
            $table->string("longitud",45);
        });
    }

    public function down(): void
    {
        Schema::drop('direccion');
    }
};
