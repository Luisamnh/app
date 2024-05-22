import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  search() {
    if (this.searchQuery) {
      this.router.navigate(['/results'], { queryParams: { query: this.searchQuery } });
    } else {
      alert('Por favor, ingresa un término de búsqueda');
    }
  }
}
