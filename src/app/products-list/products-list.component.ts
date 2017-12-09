import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-products-list',
  template: `
  <script>
  div {
    margin: 70px;
    border: 1px solid #4CAF50;
} 
</script>

<div style="text-align:center;margin:70px;border: 1px solid #4CAF50">
<ul>   
<li *ngFor="let x of olist" (click)="selectProduct(x)"  style="text-align:center">
  {{x.name}}
  {{x.price}} 
</li>
</ul>
</div>

<app-product-detail *ngIf="selectedProduct" [product]="selectedProduct"></app-product-detail> 

 `,
  styles: []
})

export class ProductsListComponent  {
olist: Array<Product>=[];
//heroes: Hero[];
selectedProduct: Product;


init()
{
  /* list: Array<Product>=[{id:1,name:'Java 9.0',price:15,description:"The new edition is available"},
                         {id:1,name:'Angular JS',price:19,description:"Only one  is available to check out"},
                         {id:1,name:'Spring Boot',price:9,description:"Three are available to check out"},
                         {id:1,name:'Ruby Sand',price:12,description:"It can be obtained for Sale"} ];
  return list;*/
  }
  constructor() {
    this.olist =[{id:1,name:'Java 9.0',price:15.00,description:"The new edition is available"},
                         {id:2,name:'Angular JS',price:19.00,description:"Only one  is available to check out"},
                         {id:3,name:'Spring ',price:10.50,description:"Three are available to check out"},
                         {id:4,name:'Ruby sand',price:12.30,description:"It can be sold for Sale"} ];
   //this.myHero = 'Windstorm';
  
}
 selectProduct(product: Product) { this.selectedProduct = product; }
}

export class Product{
  id: number; 
  name:string;
  price: number; 
  description: string; 
  constructor(id: number, name: string, price: number) 
  { this.id=id; this.name = name; this.price = price; }
}

  

