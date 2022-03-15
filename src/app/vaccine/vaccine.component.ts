import { Component, OnInit } from '@angular/core';
declare function require(name:string);

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
    console.log(this.data)
  }

}
