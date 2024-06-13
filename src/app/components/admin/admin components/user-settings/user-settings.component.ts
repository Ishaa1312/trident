import { Component, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  contact: number;
  isActive: string;
  selected: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', contact: 1238765432, isActive: 'H', selected: false },
  { id: 2, name: 'Helium', contact: 1234567898, isActive: 'He', selected: false },
  { id: 3 , name: 'oxygen' , contact: 1256789054 , isActive: 'ox' , selected: false}
];

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements AfterViewInit {
  constructor(private router: Router) {}

  displayedColumns: string[] = ['id', 'name', 'contact', 'isActive', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  toggleActivation(element: PeriodicElement) {
    element.selected = !element.selected;
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {}
}
