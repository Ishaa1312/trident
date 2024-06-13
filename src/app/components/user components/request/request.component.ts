import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent {

  centers: number[] = [
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
}
