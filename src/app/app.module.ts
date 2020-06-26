import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductComponent } from './components/product/product.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
import { IndexComponent } from './components/index/index.component';
import { ListComponent } from './components/list/list.component';
import { WelcomeComponent } from './components/index/welcome/welcome.component';
import { SettingComponent } from './components/index/setting/setting.component';
import { PlistComponent } from './components/list/plist/plist.component';
import { PcateComponent } from './components/list/pcate/pcate.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
//引入服务
import { HttpClientModule } from '@angular/common/http'; //使用this.http必须要引入的
import { CommonService } from './services/common.service';

//引入自定义模块
import { UserModule } from './module/user/user.module'
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    NewscontentComponent,
    ProductComponent,
    ProductcontentComponent,
    IndexComponent,
    ListComponent,
    WelcomeComponent,
    SettingComponent,
    PlistComponent,
    PcateComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule //挂载
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
