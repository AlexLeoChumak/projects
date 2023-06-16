import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

export class CreateProductComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  form = new FormGroup({
    title: new FormControl<string>('')
  })

  submit() {
    console.log(this.form.value);
  }
}
