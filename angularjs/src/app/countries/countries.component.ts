import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any;
  allCountries: any;
  offset = 0;
  page = 5

  constructor(private http : HttpClient){
  }

  ngOnInit(): void {
    this.getNextCountries()
    this.http.get('http://localhost:3000/countries')
    .subscribe(Response => {

      if (Response) {
        this.allCountries = Response
        this.countries = this.allCountries.slice(this.offset, this.page);
        this.offset += this.page
      }
    });
  }

  getNextCountries() {
    let that = this;
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        console.log('here');
        that.allCountries.slice(that.offset, that.offset + that.page).forEach( (v:any) => {
          that.countries.push(v)
        })
        that.offset += that.page
      }
    }
  }

}
