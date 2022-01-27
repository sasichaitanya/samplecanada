import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productDetails:any;
  

  constructor(private router: Router) {
    this.productDetails =[
       {
      producturl:'laptop',
      productdescription:'agfhfjkas',
      cost:'50000'
      },
      {
      producturl:'BlueTooth head set',
      productdescription:'tygutyui',
      cost:'2000'
    },
    {
      producturl:'Airpods',
      productdescription:'rdtfyguhirytyui',
      cost:'15000'
    },
    {

      producturl:'speakers',
      productdescription:'esrdytfyuuhji',
      cost:20000
    },
    {
        producturl:'Television',
      productdescription:'etrtyu',
      cost:'80000'
    },
    {
      producturl:'Refridgerator',
      productdescription:'rftgyhurt',
      cost:'60000'
    },
     {
      producturl:'Air Conditioner',
      productdescription:'edrftgyuhi',
      cost:'45000'
    },
    {
      producturl:'Water Purifier',
      productdescription:'wertyu',
      cost:'30000'
    },
    {
      producturl:'Washing Machine',
      productdescription:'ertyu',
      cost:'60000'
    },
    {
      producturl:'Dishwasher',
      productdescription:'ertyu',
      cost:'75000'
    }
   ]
  }
  ngOnInit(): void {
  }

}
