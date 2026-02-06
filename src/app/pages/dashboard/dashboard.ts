import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
    recentInvoices = [
        { client: 'Rajesh Kumar', date: '28 Jan 2026', amount: '2,500', status: 'Paid' },
        { client: 'Modern Tech Solutions', date: '25 Jan 2026', amount: '15,800', status: 'Pending' },
        { client: 'Sunita Sharma', date: '20 Jan 2026', amount: '4,200', status: 'Paid' },
        { client: 'Gopal Sweets', date: '18 Jan 2026', amount: '1,100', status: 'Paid' }
    ];
}
