import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MateriaModule } from 'src/app/materia/materia/materia.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    MateriaModule
  ],
  exports:[
    ButtonComponent,
    ProgressBarComponent]
})
export class SharedModule { }
