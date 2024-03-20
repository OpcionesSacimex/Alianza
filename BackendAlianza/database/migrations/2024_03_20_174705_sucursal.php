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
        Schema::create("sucursal", function (Blueprint $table) {
            $table->id();
            $table->string("nombre",30);
            $table->foreignId("asesor_id")->nullable(false)->references('id')->on('asesor');
            $table->foreignId("direccion_id")->nullable(false)->references('id')->on('direccion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        schema::drop("sucursal");
    }
};
