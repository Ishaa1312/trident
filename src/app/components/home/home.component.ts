import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number,
  name: string;
  batch: number;
  finger: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', batch: 1.0079, finger: 'H' },
  { id: 2, name: 'Helium', batch: 4.0026, finger: 'He' },
  { id: 3, name: 'Lithium', batch: 6.941, finger: 'Li' },
  { id: 4, name: 'Beryllium', batch: 9.0122, finger: 'Be' },
  { id: 5, name: 'Boron', batch: 10.811, finger: 'B' },
  { id: 6, name: 'Carbon', batch: 12.0107, finger: 'C' },
  { id: 7, name: 'Nitrogen', batch: 14.0067, finger: 'N' },
  { id: 8, name: 'Oxygen', batch: 15.9994, finger: 'O' },
  { id: 9, name: 'Fluorine', batch: 18.9984, finger: 'F' },
  { id: 10, name: 'Neon', batch: 20.1797, finger: 'Ne' },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private router: Router){}

  viewFinger(link: any) {
    this.router.navigate(['display-prints']);
  }

  request(){
    this.router.navigate(['request']);
  }

  batches: number[] = [
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

  centers : string[] = [

    "Awadpuri" , 
    "Indrapuri" , 
    "Piplani" , 
    "Vijay Nagar"
  ];
  displayedColumns: string[] = ['id', 'name', 'batch', 'finger'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
  }
}
