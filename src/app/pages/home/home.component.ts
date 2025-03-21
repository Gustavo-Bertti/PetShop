import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Consulta } from '../../types/Consultas';
import { CommonModule } from '@angular/common';

const CONSULTAS: Consulta[] = [
  { pet: 'Thor', tutor: 'Carlos Silva', tipo: 'Vacina', veterinario: 'Dra. Ana', horario: '10:00', status: 'Pendente' },
  { pet: 'Luna', tutor: 'Fernanda Souza', tipo: 'Check-up', veterinario: 'Dr. João', horario: '11:30', status: 'Concluída' },
  { pet: 'Rex', tutor: 'Marcos Lima', tipo: 'Emergência', veterinario: 'Dra. Beatriz', horario: '14:00', status: 'Pendente' },
  { pet: 'Lima', tutor: 'Marcos Lima', tipo: 'Emergência', veterinario: 'Dra. Beatriz', horario: '14:00', status: 'Cancelada' },
];
@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  displayedColumns: string[] = ['pet', 'tutor', 'tipo', 'veterinario', 'horario', 'status'];
  dataSource = new MatTableDataSource(CONSULTAS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}
}
