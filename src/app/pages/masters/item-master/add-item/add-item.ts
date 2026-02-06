import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface Item {
    name: string;
    type: 'Product' | 'Service';
    price: number | null;
    gst: number;
    stock: number | null;
    unit: string;
    hsn: string;
}
@Component({
    selector: 'app-add-item',
    imports: [CommonModule,FormsModule],
    templateUrl: './add-item.html',
    styleUrl: './add-item.css',
})
export class AddItem {
    // Default Item State
    item: Item = {
        name: '',
        type: 'Product',
        price: null,
        gst: 18,
        stock: null,
        unit: 'PCS',
        hsn: ''
    };

    constructor(private router: Router,
        private location: Location
    ) { }

    goBack() {
        this.location.back();
    }

    saveItem() {
        // Simple Validation
        if (!this.item.name.trim()) {
            alert('Please enter an Item Name');
            return;
        }

        if (this.item.price === null || this.item.price < 0) {
            alert('Please enter a valid Selling Price');
            return;
        }

        // Process for Services (clear stock and unit data)
        if (this.item.type === 'Service') {
            this.item.stock = 0;
            this.item.unit = 'SERV';
        }

        console.log('Pushing to Database:', this.item);

        // In a real app, you would call your DataService here:
        // this.dataService.addItem(this.item);

        alert(`${this.item.name} added successfully!`);
        this.router.navigate(['/items']);
    }
}
