import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatogComponent } from './catog.component';

const routes: Routes = [
  {
    path: '',
    component: CatogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatogRoutingModule { }
