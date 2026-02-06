import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [CommonModule,FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login {

    loginData = {
        email: '',
        password: ''
    };

    showPassword = false;
    isLoading = false;

    constructor(private router: Router) { }

    onLogin(event: Event) {
        event.preventDefault();
        this.isLoading = true;

        // Simulate API Call
        setTimeout(() => {
            console.log('Logging in with:', this.loginData);
            this.isLoading = false;

            // Redirect to dashboard after successful login
            this.router.navigate(['/full/pages/dashboard']);
        }, 1500);
    }
}
