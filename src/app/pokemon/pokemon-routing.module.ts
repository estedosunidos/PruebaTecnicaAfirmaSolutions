import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";import { LayaoutPageComponent } from "./pages/layaout-page/layaout-page.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";



const route:Routes=[{
  path:'',
  component:LayaoutPageComponent,
  children:[
    {path:'search-pokemon',component:SearchPageComponent},
    {path:'List-pokemon',component:LayaoutPageComponent},
    {path:'**',redirectTo:'List-pokemon'},

  ]
}]
@NgModule({
  imports:[RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
