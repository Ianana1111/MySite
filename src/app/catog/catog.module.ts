import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatogRoutingModule } from './catog-routing.module';
import { CatogComponent } from './catog.component';


@NgModule({
  declarations: [
    CatogComponent
  ],
  imports: [
    CommonModule,
    CatogRoutingModule
  ]
})
export class CatogModule { }
