import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-view-carts',
  templateUrl: './view-carts.component.html',
})
export class ViewCartsComponent implements OnInit {
  constructor(
    private build: FormBuilder,
    private service: AllServicesService,
    private productService: AllServicesService
  ) {}

  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: [''],
    });
    this.getAllCarts();
  }

  carts: any[] = [];
  products: any[] = [];
  total = 0;
  form!: FormGroup;
  details: any;

  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res;
    });
  }

  applyFilter() {
    let date = this.form.value;
    this.service.getAllCarts(date).subscribe((res: any) => {
      this.carts = res;
    });
  }

  deleteCart(id: number) {
    this.service.deleteCart(id).subscribe((res) => {
      this.getAllCarts();
      alert('Cart deleted Success');
    });
  }

  view(index: number) {
    this.products = [];
    this.details = this.carts[index];
    for (let x in this.details.products) {
      this.productService
        .getProductById(this.details.products[x].productId)
        .subscribe((res) => {
          this.products.push({
            item: res,
            quantity: this.details.products[x].quantity,
          });
        });
    }
    console.log(this.details);
  }
}
