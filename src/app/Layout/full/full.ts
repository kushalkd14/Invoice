import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-full',
    imports: [RouterOutlet],
    templateUrl: './full.html',
    styleUrl: './full.css',
})
export class Full {


    isDarkMode = false;
    currentLang = 'en';

    ngOnInit() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.isDarkMode = true;
            document.documentElement.classList.add('dark');
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;

        if (this.isDarkMode) {
            // This adds the .dark class to the <html> tag
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            // This removes it
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    changeLanguage(lang: string) {
        this.currentLang = lang;
        // If using ngx-translate: this.translate.use(lang);
        console.log(`Language switched to: ${lang}`);
    }
}
