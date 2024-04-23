<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Tipo_doc extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'INE'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'Fotografía'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'Acta de nacimiento'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'CURP'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'RFC'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'Comprobante de domicilio'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'Croquis'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'Comprobante 1'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'Comprobante 2'
        ));
        DB::table('tipo_doc')->insert(array(
            'tipo' => 'Comprobante 3'
        ));
    }
}
