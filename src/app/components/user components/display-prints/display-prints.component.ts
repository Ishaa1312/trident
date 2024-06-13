import { Component } from '@angular/core';

@Component({
  selector: 'app-display-prints',
  templateUrl: './display-prints.component.html',
  styleUrl: './display-prints.component.scss'
})
export class DisplayPrintsComponent {
  slides = [
    {id: 1, image: 'assets/images/fin1.jpeg'},
    {id: 2, image: 'assets/images/fin2.jpeg'},
    {id: 3, image: 'assets/images/fin3.jpeg'},
    // Add more slides as needed
  ];
}
