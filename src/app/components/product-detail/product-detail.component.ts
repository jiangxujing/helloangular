import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' //获取动态路由的id必须要引入的模块
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public domain:string = ''
  public list:any[] = []
  constructor(public route:ActivatedRoute,public common:CommonService) {
    this.domain = this.common.domain
  }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      console.log(data)
      this.requestContent(data.aid)
    })
  }
  requestContent(id){
      let api = 'api/productcontent?id='+id
      this.common.get(api).then((res:any)=>{
        this.list = res.result
        console.log(res)
      })
    }
}
