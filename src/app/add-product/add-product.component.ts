import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductSService} from "../service/product-s.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private ps:ProductSService) {
  }
  addprodcut:FormGroup=new FormGroup({
    id: new FormControl('',[Validators.required,Validators.minLength(1)]),
    title:new FormControl('',[Validators.required,Validators.minLength(6)]),
    price:new FormControl('',[Validators.required,Validators.min(0)]),
    quantity:new FormControl('',[Validators.required,Validators.min(0)]),
    like:new FormControl('',[Validators.required,Validators.min(0)]),


  })

  save(){
    console.log(this.addprodcut.value)
    this.ps.addproduct(this.addprodcut.value as any)

  }
  reset(){
    this.addprodcut.reset()
  }
}
