import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-party',
    imports: [CommonModule,FormsModule],
    templateUrl: './add-party.html',
    styleUrl: './add-party.css',
})
export class AddParty {
    party = {
        name: '',
        phone: '',
        gstin: '',
        balance: null,
        balanceType: 'receive',
        address: ''
    };

    constructor(private router: Router) { }

    goBack() {
        this.router.navigate(['/full//pages/masters/party']);
    }

    saveParty() {
        if (!this.party.name) {
            alert('Please enter at least the Party Name');
            return;
        }

        // Logic: Multiply balance by -1 if type is 'pay' for accounting
        const finalBalance = this.party.balanceType === 'pay' ? -(this.party.balance || 0) : (this.party.balance || 0);

        console.log('Saving Party Data:', { ...this.party, balance: finalBalance });

        // After saving to API/Local Storage, redirect back
        alert('Party added successfully!');
        this.router.navigate(['/full/pages/masters/party']);
    }
}
