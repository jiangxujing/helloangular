import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' //这是为了获取url上面的参数而需要引用的一个模块
/*
 get传值
 1、跳转
 <li *ngFor="let item of list;let key=index">
   <a routerLink="/newscontent" routerLinkActive="active" [queryParams]="{aid:key}"> {{key}}--{{item}}</a>
 </li>
 2、接收
 import { ActivatedRoute } from '@angular/router'
 constructor(public route:ActivatedRoute) { }
 this.route.queryParams.subscribe(data=>{
   console.log(data)
 })
 */

/* 动态传值
 1、配置动态路由： path:'newscontent/:aid',component:NewscontentComponent
 2、跳转： <li *ngFor="let item of list;let key=index">
    <a [routerLink]="['/newscontent/',key]">
      {{key}}--{{item}}
    </a>
  </li>
  3、console.log(this.route.params.value)
     this.route.params.subscribe(data=>{
      console.log(data)
    })
 */
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      console.log(data)
    })
     this.route.params.subscribe(data=>{
      console.log(data)
    })
  }

}
