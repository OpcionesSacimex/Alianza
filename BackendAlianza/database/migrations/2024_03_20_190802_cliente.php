<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cliente', function (Blueprint $table) {
            $table->id();
            $table->foreignId("usuario_id")->nullable(true)->references('id')->on('usuario');
            $table->foreignId("persona_id")->nullable(true)->references('id')->on('persona');
            $table->foreignId("direccion_id")->nullable(true)->references('id')->on('direccion');
            $table->foreignId("economico_id")->nullable(true)->references('id')->on('economico');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('cliente');
    }
};
