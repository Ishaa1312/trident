import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


export interface PeriodicElement {
  id: number;
  name: string;
  centerCode: number;
  batchCode: number;
  action : boolean;
}

export interface PeriodicElement1 {
  id: number;
  name: string;
  centerCode: number;
  action : boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Ayush', centerCode: 12387, batchCode:  65432, action: false },
  { id: 2, name: 'Rohan', centerCode: 12345, batchCode: 67898, action: false },
  { id: 3, name: 'Rihan', centerCode: 17687, batchCode:  62232, action: false },
  { id: 4, name: 'Rohit', centerCode: 16345, batchCode: 67898, action: false }
];

const ELEMENT_DATA1:  PeriodicElement1[] = [
  { id: 1, name: 'Ayush', centerCode: 12387, action: false },
  { id: 2, name: 'Rohan', centerCode: 12345, action: false },
  { id: 3, name: 'Rihan', centerCode: 17687, action: false },
  { id: 4, name: 'Rohit', centerCode: 16345, action: false }

]

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrl: './request-approval.component.scss'
})
export class RequestApprovalComponent {

  constructor(private router: Router) {}

  displayedColumns: string[] = ['id', 'username', 'centerCode', 'batchCode', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns1 : string[] = ['id' , 'username' , 'centerCode' , 'action'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {}

}
