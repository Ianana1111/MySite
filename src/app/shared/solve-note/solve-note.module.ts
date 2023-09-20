import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolveNoteComponent } from './solve-note.component';
import { SolveNoteRoutingModule } from './solve-note-routing.module';


@NgModule({
  declarations: [
    SolveNoteComponent
  ],
  imports: [
    CommonModule,
    SolveNoteRoutingModule
  ],
  exports: [ // 重點
    SolveNoteComponent
  ]
})
export class SolveNoteModule { }
