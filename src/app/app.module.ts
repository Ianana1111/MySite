import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LifeComponent } from './shared/life/life.component';
// import { SolveNoteComponent } from './shared/solve-note/solve-note.component';

@NgModule({
  declarations: [
    AppComponent,
    // LifeComponent,
    // SolveNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
