import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeRoutingModule } from './life-routing.module';
import { LifeComponent } from './life.component';


@NgModule({
  declarations: [LifeComponent],
  imports: [
    CommonModule,
    LifeRoutingModule
  ],
  exports:[
    LifeComponent
  ]
})
export class LifeModule { }
