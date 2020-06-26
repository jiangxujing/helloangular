import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActicleRoutingModule } from './acticle-routing.module';
import { ActicleComponent } from './acticle.component';


@NgModule({
  declarations: [ActicleComponent],
  imports: [
    CommonModule,
    ActicleRoutingModule
  ]
})
export class ActicleModule { }
