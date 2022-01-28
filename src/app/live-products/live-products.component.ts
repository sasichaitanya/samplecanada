import { Component, OnInit } from '@angular/core';
// api service
import { ApiServices } from '../services/api.service';
@Component({
  selector: 'app-live-products',
  templateUrl: './live-products.component.html',
  styleUrls: ['./live-products.component.scss']
})
export class LiveProductsComponent implements OnInit {
 productsList: any;
  constructor(private apiSvc: ApiServices) {
    this.productsList = [];
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.apiSvc.getAq()
      .subscribe((result: any) => {
        this.productsList = result.data;
      }, err => {
        alert('Error while fetching the live products')
      })
  }

}
