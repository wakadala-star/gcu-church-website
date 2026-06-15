import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly dropdownOpen = signal(false);
  protected readonly mobileMenuOpen = signal(false);

  constructor(private router: Router) {}

  toggleDropdown(): void {
    this.dropdownOpen.update((open) => !open);
  }

  openDropdown(): void {
    this.dropdownOpen.set(true);
  }

  closeDropdown(): void {
    this.dropdownOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  scrollToAbout(event: MouseEvent): void {
    event.preventDefault();
    this.closeDropdown();
    this.mobileMenuOpen.set(false);

    if (this.router.url === '/') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
  }
}
