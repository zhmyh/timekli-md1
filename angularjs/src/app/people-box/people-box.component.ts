import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-people-box',
  templateUrl: './people-box.component.html',
  styleUrls: ['./people-box.component.css']
})
export class PeopleBoxComponent implements OnInit {
  @Input() data:any;
  countries: any;

  constructor(private http : HttpClient){

  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/countries', {params: {"id" : this.data.countries}})
    .subscribe(Response => {

      if (Response) {
        this.countries = Response
      }
    });
  }

}
