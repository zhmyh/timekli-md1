import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-box',
  templateUrl: './country-box.component.html',
  styleUrls: ['./country-box.component.css']
})
export class CountryBoxComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
