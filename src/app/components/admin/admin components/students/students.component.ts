import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number,
  name: string;
  contact: number;
  finger: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Ayush', contact: 1234567897, finger: 'a' },
  { id: 2, name: 'Rohan', contact: 1234567893, finger: 'H' },
  { id: 3, name: 'abhisekh', contact: 1234562941, finger: 'ai' }
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  constructor(private router: Router){}

  viewFinger(link: any) {
    this.router.navigate(['display-prints']);
  }

  request(){
    this.router.navigate(['request']);
  }

  contactes: number[] = [
    122020,
    213123,
    123123,
    343434,
    324322,
    222344,
    355422,
    454644,
    234234,
  ];

  displayedColumns: string[] = ['id', 'name', 'contact', 'finger'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
  }

}
