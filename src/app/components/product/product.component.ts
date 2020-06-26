import { Component, OnInit } from '@angular/core';
//import {Router,NavigationExtras} from '@angular/router' //也可以不引入NavigationExtras
import {Router} from '@angular/router'

/*
  通过js跳转路由 --动态路由跳转
  1、引入：import {Router} from '@angular/router'
  2、声明：constructor(public router:Router) { }
  3、跳转： this.router.navigate(['/productcontent/123'])， this.router.navigate(['/home'])

 二：get传值跳转
  let queryParams = {
    queryParams:{'aid':123}
  }
  this.router.navigate(['/news'],queryParams)

 */
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //这里的冒号后面的Router跟import的Router要对应上
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  //跳转到商品详情页
getProductDetail(){
  this.router.navigate(['/productcontent/123'])
}
//跳转到新闻页
getNews(){
  // let queryParams:NavigationExtras = {
  //   queryParams:{'aid':123}
  // }
  let queryParams = {
    queryParams:{'aid':123}
  }
  this.router.navigate(['/news'],queryParams)
}
}
