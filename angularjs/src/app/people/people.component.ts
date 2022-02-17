import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people:any;

  constructor(private http : HttpClient){
  }

  ngOnInit(): void {
    this.getAllPoeple()
  }

  getAllPoeple(): void {
    this.http.get('http://localhost:3000/people')
    .subscribe(Response => {

      if (Response) {
        this.people = Response
      }
    });
  }

}
