import { Component, Input, Output,EventEmitter } from '@angular/core';
import { products,Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  products = [...products ];

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
