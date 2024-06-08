import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'Pokemon',
    loadChildren:()=>import('./pokemon/pokemon.module').then(m=>m.PokemonModule)
  },
  {
    path:'',
    redirectTo:'Pokemon',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
