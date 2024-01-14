import { Component, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  constructor(private service: AllServicesService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  /* ===================== (*_*) ===================== */

  cartProducts: any[] = [];
  total: number = 0;
  success: boolean = false;

  /* ===================== (*_*) ===================== */

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  /* ===================== (*_*) ===================== */

  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  minsAmount(index: number) {
    this.cartProducts[index].quantity--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  detectChange() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  /* ===================== (*_*) ===================== */

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  /* ===================== (*_*) ===================== */

  addCart() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });

    let Model = {
      userId: 5,
      date: new Date(),
      products: products,
    };

    this.service.createNewCart(Model).subscribe((res) => {
      this.success = true;
    });
  }
}
