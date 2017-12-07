import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      
    </div>
 
     <app-products-list></app-products-list>  
    
  `,
  styles: []
})
export class AppComponent {
  title = 'App Store';
}

export class Product{
  id: number; 
  name:string;
  price: number; 
  description: string; 
  constructor(id: number, name: string, price: number) 
  { this.id=id; this.name = name; this.price = price; }
}