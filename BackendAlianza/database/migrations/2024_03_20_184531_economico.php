<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('economico', function (Blueprint $table) {
            $table->id();
            $table->float("ingreso_q");
            $table->float("disponible_q");
            $table->float("prestamo_f");
            $table->string("plazo_f");
            $table->string("clabe_int",18)->nullable(true);
        });
    }

    public function down(): void
    {
        Schema::drop('economico');
    }
};
