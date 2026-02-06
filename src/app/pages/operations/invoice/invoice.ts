import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-invoice',
    imports: [CommonModule, FormsModule],
    templateUrl: './invoice.html',
    styleUrl: './invoice.css',
})
export class Invoice {
    // Invoice Metadata
    invoiceNumber = 'INV-' + Math.floor(1000 + Math.random() * 9000);
    invoiceDate = new Date().toISOString().split('T')[0];

    // Selection Data
    selectedParty: any = null;
    itemsList: any[] = []; // Items added to the current bill

    // Mock Data from Masters (In real app, get from DataService)
    availableParties = [
        { name: 'Acme Corp', gstin: '27AAAAA0000A1Z5', address: 'Mumbai' },
        { name: 'Sharma Store', gstin: 'URP', address: 'Delhi' }
    ];

    availableItems = [
        { name: 'Wireless Mouse', price: 1200, gst: 18, unit: 'PCS' },
        { name: 'HP Monitor', price: 8500, gst: 18, unit: 'PCS' }
    ];

    constructor(private router: Router) { }

    ngOnInit() { }

    addItem() {
        // Add a blank row
        this.itemsList.push({ name: '', price: 0, qty: 1, gst: 18, total: 0 });
    }

    removeItem(index: number) {
        this.itemsList.splice(index, 1);
    }

    calculateRowTotal(item: any) {
        const taxAmount = (item.price * item.qty) * (item.gst / 100);
        item.total = (item.price * item.qty) + taxAmount;
        return item.total;
    }

    getSubTotal() {
        return this.itemsList.reduce((sum, item) => sum + (item.price * item.qty), 0);
    }

    getTotalTax() {
        return this.itemsList.reduce((sum, item) => sum + ((item.price * item.qty) * (item.gst / 100)), 0);
    }

    getGrandTotal() {
        return this.getSubTotal() + this.getTotalTax();
    }

    saveInvoice() {
        if (!this.selectedParty || this.itemsList.length === 0) {
            alert('Please select a party and add at least one item.');
            return;
        }
        console.log('Generating Bill...', {
            party: this.selectedParty,
            items: this.itemsList,
            total: this.getGrandTotal()
        });
        alert('Invoice Generated Successfully!');
        this.router.navigate(['/full/pages']);
    }

    navigateToDashboard(){
        this.router.navigate(['/full/pages']);
    }
}
