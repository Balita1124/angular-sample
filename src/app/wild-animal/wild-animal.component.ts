import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WildAnimal } from './wild-animal.model';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'app-wild-animal',
  templateUrl: './wild-animal.component.html',
  styleUrl: './wild-animal.component.scss',
})
export class WildAnimalComponent implements OnInit {
  protected wildAnimals: WildAnimal[] = [];
  protected pageSize: number = 10;
  protected currentPage: number = 1;
  protected paginatedData: WildAnimal[] = [];

  constructor(private cdk: ChangeDetectorRef) {
    this.initWildAnimals();
  }
  ngOnInit(): void {
    this.refresh({ page: { current: this.currentPage, size: this.pageSize } });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  get totalPages() {
    return Math.ceil(this.wildAnimals.length / this.pageSize);
  }

  get totalItems() {
    return this.wildAnimals.length;
  }

  refresh(state: ClrDatagridStateInterface) {
    const { page } = state;
    if (page) {
      const start = ((page.current ?? 1) - 1) * (page.size ?? 1);
      const end = start + (page.size ?? 1);
      this.paginatedData = this.wildAnimals.slice(start, end);
      this.currentPage = page.current ?? 1;
    }
    this.cdk.detectChanges();
  }

  private initWildAnimals() {
    this.wildAnimals = [
      new WildAnimal('Maki', 'Lemurien', 'Tree'),
      new WildAnimal('Sifaka', 'Lemurien', 'Tree'),
      new WildAnimal('Caiement', 'Reptile', 'land'),
      new WildAnimal('Boa', 'Reptile', 'land'),
      new WildAnimal('Maki', 'Lemurien', 'Tree'),
      new WildAnimal('Sifaka', 'Lemurien', 'Tree'),
      new WildAnimal('Caiement', 'Reptile', 'land'),
      new WildAnimal('Boa', 'Reptile', 'land'),
      new WildAnimal('Maki', 'Lemurien', 'Tree'),
      new WildAnimal('Sifaka', 'Lemurien', 'Tree'),
      new WildAnimal('Caiement', 'Reptile', 'land'),
      new WildAnimal('Boa', 'Reptile', 'land'),
      new WildAnimal('Maki', 'Lemurien', 'Tree'),
      new WildAnimal('Sifaka', 'Lemurien', 'Tree'),
      new WildAnimal('Caiement', 'Reptile', 'land'),
      new WildAnimal('Boa', 'Reptile', 'land'),
    ];
  }
}
