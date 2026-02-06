import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-master',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './item-master.html',
  styleUrl: './item-master.css',
})
export class ItemMaster {
    items = [
        { name: 'Wireless Mouse', type: 'Product', price: '1,200', stock: 45, unit: 'PCS', hsn: '8471', gst: 18 },
        { name: 'Web Development', type: 'Service', price: '25,000', stock: 0, unit: 'HRS', hsn: '9983', gst: 18 },
        { name: 'HP Laptop Charger', type: 'Product', price: '2,450', stock: 5, unit: 'PCS', hsn: '8504', gst: 18 },
    ];
}
