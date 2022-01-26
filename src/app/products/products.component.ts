import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productDetails:any;
  constructor(private router:Router) { 
   this.productDetails=[{
     
    
      "image": "C:\Users\shiva\angular\samplecanada\src\app\Images\Hp.jpg",
      "name": "Hp",
      "price": "1500$",
      "id": "1",
      "rating": "5"
    },
    {
      "image": "iphone image",
      "name": "iphone 12 pro max",
      "price": "1200$",
      "id": "2",
      "rating": "4.9"
    },
    {
      "image": "water bottle",
      "name": "Tapperware bottle",
      "price": "20$",
      "id": "3",
      "rating": "4.8"
    },
    {
      "image": "mouse",
      "name": "Loggiestick mouse",
      "price": "120$",
      "id": "4",
      "rating": "4.5"
    },
    {
      "image": "keypad",
      "name": "Loggiestick keyboard",
      "price": "120$",
      "id": "5",
      "rating": "4.6"
    },
    {
      "image": "pendrive",
      "name": "kingston",
      "price": "40$",
      "id": "6",
      "rating": "4.8"
    },
    {
      "image": "Hardware",
      "name": "Dell",
      "price": "50$",
      "id": "7",
      "rating": "4.4"
    },
    {
      "image": "SSD",
      "name": "Inspiron",
      "price": "100$",
      "id": "8",
      "rating": "4"
    },
    {
      "image": "Ram",
      "name": "Intell",
      "price": "150$",
      "id": "9",
      "rating": "4.2"
    },
    {
      "image": "Mini",
      "name": "Google mini",
      "price": "80$",
      "id": "10",
      "rating": "4.8"
    }

   
   ]


  }
  
  



  ngOnInit(): void {
  }

}
