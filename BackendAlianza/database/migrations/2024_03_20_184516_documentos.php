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
        Schema::create('documentos', function (Blueprint $table) {
            $table->id();
            $table->foreignId("cliente_id")->nullable(true)->references('id')->on('cliente');
            $table->string("credencial",100);
            $table->string("croquis",100);
            $table->string("foto",100);
            $table->string("comp_dom",100);
            $table->boolean("status");
            $table->string("observaciones",100);
            $table->string("comprobante_peso",100);
            $table->string("comprobante_total",100);
            $table->string("ine",100);
            $table->string("autorizacion",100);
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        schema::drop("documentos");
    }
};
