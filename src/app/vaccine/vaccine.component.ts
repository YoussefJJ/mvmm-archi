import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: typedef
declare function require(name: string);

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit(): void {
    const data = require('./../../assets/data/data.json');
    this.data = data;
  }

}
