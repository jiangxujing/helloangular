import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';

import { CommonService } from './services/common.service';

@NgModule({
  //user模块里面的组件
  declarations: [ProfileComponent, AddressComponent, OrderComponent, UserComponent],
  imports: [
    CommonModule
  ],
    providers: [CommonService],
    exports:[UserComponent,OrderComponent] //暴露组件，让其他组件使用
})
export class UserModule { }
