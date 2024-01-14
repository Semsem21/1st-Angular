import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-each-product',
  templateUrl: './each-product.component.html',
})
export class EachProductComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  length: any = '';

  @Input() data!: Product;
  @Output() item = new EventEmitter();

  addButton: boolean = false;
  amount: number = 1;

  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}
