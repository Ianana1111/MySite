import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SolveNoteModule } from '../shared/solve-note/solve-note.module';
import { LifeModule } from '../shared/life/life.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SolveNoteModule,
    LifeModule
  ]
})
export class HomeModule { }
