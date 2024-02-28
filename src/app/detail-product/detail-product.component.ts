import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from "../model/product";
import {ProductSService} from "../service/product-s.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
id!:number
  p!:Product

  constructor(private Act:ActivatedRoute,private ps:ProductSService){}


  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    this.p=this.ps.listProduct[this.id]

  }
}
