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
<li *ngFor="let x of olist" style="text-align:center">
  {{x.name}}
  {{x.price}}  
</li>
</ul>
</div> 
 `,
  styles: []
})
export class ProductsListComponent  {
olist: Array<Product>=[];
init()
{
  /* list: Array<Product>=[{id:1,name:'Java 9.0',price:15,description:"The new edition is available"},
                         {id:1,name:'Angular JS',price:19,description:"The new edition is available"},
                         {id:1,name:'Spring ',price:9,description:"The new edition is available"},
                         {id:1,name:'Ruby sand',price:12,description:"The new edition is available"} ];
  return list;*/
  }
  constructor() {
    this.olist =[{id:1,name:'Java 9.0',price:15,description:"The new edition is available"},
                         {id:1,name:'Angular JS',price:19,description:"The new edition is available"},
                         {id:1,name:'Spring ',price:10,description:"The new edition is available"},
                         {id:1,name:'Ruby sand',price:12,description:"The new edition is available"} ];
   //this.myHero = 'Windstorm';
}
}

class Product{
  id: number; 
  name:string;
  price: number; 
  description: string; 
  constructor(id: number, name: string, price: number) 
  { this.id=id; this.name = name; this.price = price; }
}

  

