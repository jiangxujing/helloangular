import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import {NewsComponent} from './components/news/news.component'
import {NewscontentComponent} from './components/newscontent/newscontent.component'
import {ProductComponent} from './components/product/product.component'
import {ProductcontentComponent} from './components/productcontent/productcontent.component'
//父子路由嵌套
import {IndexComponent} from './components/index/index.component'
import {WelcomeComponent} from './components/index/welcome/welcome.component'
import {SettingComponent} from './components/index/setting/setting.component'
import {ListComponent} from './components/list/list.component'
import {PcateComponent} from './components/list/pcate/pcate.component'
import {PlistComponent} from './components/list/plist/plist.component'


//无人点餐案例
import {HomeComponent} from './components/home/home.component'
import {ProductDetailComponent} from './components/product-detail/product-detail.component'

const routes:Routes = [
  //这是动态模块需要放开的
    // {path:'users',loadChildren:()=>import('./module/users/users.module').then(mod=>mod.UsersModule)},
    // {path:'acticle',loadChildren:()=>import('./module/acticle/acticle.module').then(mod=>mod.ActicleModule)},
    // {path:'product',loadChildren:()=>import('./module/product/product.module').then(mod=>mod.ProductModule)},
    // {path:'**',redirectTo:'users'},

    //这种写法报错找不到文件
  //  {
  //   path:'users',loadChildren:'./module/users/users.module#UsersModule'
  // },
  // {
  //   path:'acticle',loadChildren:'./module/acticle/acticle.module#ActicleModule'
  // },
  // {
  //   path:'product',loadChildren:'./module/product/product.module#ProductModule'
  // },
  // {
  //   path:'**',redirectTo:'user'
  // },
  {
    path:'home',component:HomeComponent
  },{
    path:'productDetail/:aid',component:ProductDetailComponent
  },
   {
    path:'index',component:IndexComponent,
    children:[{
      path:'welcome',component:WelcomeComponent
    },{
      path:'setting',component:SettingComponent
    },{
    path:'**',//任意路由
    redirectTo:'welcome'
  }]
  },
  {
    path:'list',component:ListComponent,
    children:[{
      path:'pcate',component:PcateComponent
    },{
      path:'plist',component:PlistComponent
    },{
    path:'**',//任意路由
    redirectTo:'pcate'
  }]
  },
   {
    path:'news',component:NewsComponent
  },{
    path:'newscontent/:aid',component:NewscontentComponent
  },{
    path:'product',component:ProductComponent
  },{
    path:'productcontent/:aid',component:ProductcontentComponent
  },{
    path:'**',//任意路由
    redirectTo:'home'
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
