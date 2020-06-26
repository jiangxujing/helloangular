import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list:any[]=[];
  public domain:string='';
  constructor(public common:CommonService,public router:Router) {
    this.domain = this.common.domain
  }

  ngOnInit(): void {
    let api = 'api/productlist'
    this.common.get(api).then((res:any)=>{
      this.list = res.result
    })
  }
goTodetail(id){
	console.log(id)
  this.router.navigate(['/productDetail/'+id,])
}
}
