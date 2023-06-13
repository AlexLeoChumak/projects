import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angtest'

  products: IProduct[] = []

  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products
    })
  }
}

