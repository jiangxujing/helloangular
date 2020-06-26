import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActicleComponent } from './acticle.component'

const routes: Routes = [
  {path:'',component:ActicleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActicleRoutingModule { }
