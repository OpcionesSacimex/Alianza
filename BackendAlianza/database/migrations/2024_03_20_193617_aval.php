<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('aval', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('telefono_id');
            $table->foreign("telefono_id")->nullable(false)->references('id')->on('telefono');
            $table->foreignId("persona_id")->nullable(false)->references('id')->on('persona');
            $table->foreignId("clientes_id")->nullable(false)->references('id')->on('cliente');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('aval');
    }
};
