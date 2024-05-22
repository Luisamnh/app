import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchQuery: string = '';
  animals: any[] = [];
  selectedAnimal: any = null;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.search();
    });
  }

  search(): void {
    if (!this.searchQuery) {
      this.message = 'Por favor, ingresa un término de búsqueda';
      this.animals = [];
      return;
    }

    this.animalService.searchAnimals(this.searchQuery).subscribe(
      (data) => {
        this.animals = data;
        this.message = this.animals.length ? '' : 'No se encontraron resultados';
      },
      (error) => {
        this.message = error.error.message || 'Ocurrió un error';
      }
    );
  }

  showDetails(animal: any): void {
    this.selectedAnimal = animal;
  }
}
