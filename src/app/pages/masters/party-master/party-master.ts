import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-party-master',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './party-master.html',
  styleUrl: './party-master.css',
})
export class PartyMaster {
    Math = Math; // To use in template
    searchQuery: string = '';

    parties = [
        { id: 1, name: 'Acme Corporation', phone: '+91 98765 43210', balance: 45000, gstin: '08AAAAA0000A1Z5' },
        { id: 2, name: 'Sharma Kirana Store', phone: '+91 99887 76655', balance: -1200, gstin: 'URP' },
        { id: 3, name: 'TechNode Solutions', phone: '+91 90000 11111', balance: 8900, gstin: '08BBBBB1111B1Z2' },
        { id: 4, name: 'Global Logistics', phone: '+91 88888 99999', balance: 0, gstin: '08CCCCC2222C1Z3' }
    ];

    filteredParties() {
        return this.parties.filter(p =>
            p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            p.gstin.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    }

    openAddPartyModal() {
        console.log('Opening Add Party Modal...');
        // Logic to open a form or navigate to /parties/new
    }
}
