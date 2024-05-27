<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\UserRol;
use Database\Seeders\Status_docs;
use Database\Seeders\Tipo_doc;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(Status_docs::class);
        $this->call(UserRol::class);
        $this->call(Tipo_doc::class);
    }

}
