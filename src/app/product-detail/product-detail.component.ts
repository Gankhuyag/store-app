import { Component, OnInit, Input } from '@angular/core';

import {Product} from  '../products-list/products-list.component';  
@Component({
  selector: 'app-product-detail',
  template: `
 
    <div style="text-align:center;margin:70px;border: 1px solid #4CAF50">
       
          <h4>{{product.name}} Detail</h4>
          <div>Id: {{product.id}}</div>
           <label>Name:
           <input  [(ngModel)]="product.name">
           
          </label>
       <br />

      <div> Description: {{product.description}} </div>     
       
 </div>
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {
@Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
