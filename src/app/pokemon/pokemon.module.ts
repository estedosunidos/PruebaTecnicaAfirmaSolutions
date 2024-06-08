
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayaoutPageComponent } from './pages/layaout-page/layaout-page.component';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MateriaModule } from '../materia/materia/materia.module'
import { PokemonsServiceService } from './services/pokemons-service.service';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';
import { TarjetasPokemonComponent } from './pages/tarjetas-pokemon/tarjetas-pokemon.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetallePokemonComponent } from './pages/detalle-pokemon/detalle-pokemon.component';
@NgModule({
  declarations: [


    LayaoutPageComponent,
    SearchPageComponent,
    DetallePokemonComponent,
    TarjetasPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MateriaModule,
    InfiniteScrollModule,
    SharedModule
  ],
  providers:[PokemonsServiceService]
})
export class PokemonModule {}
