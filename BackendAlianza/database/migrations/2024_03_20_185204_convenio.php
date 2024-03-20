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
        Schema::create('Convenio', function (Blueprint $table) {
            $table->id();
            $table->string("nombre_Conv",15)->unique();
            $table->foreignId("asesor_id")->nullable(false)->references('id')->on('asesor');
            $table->float("taza");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('Convenio');
    }
};
