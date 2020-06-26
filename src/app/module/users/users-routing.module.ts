import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component'
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
const routes: Routes = [
    {
      path:'',component:UsersComponent //这是匹配模块是需要加的 http://localhost:4200/users
    },{
      path:'profile',component:ProfileComponent //这是匹配了模块下面的http://localhost:4200/users/profile需要加的
  },{
     path:'address',component:AddressComponent//这是匹配了模块下面的http://localhost:4200/users/address需要加的
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
