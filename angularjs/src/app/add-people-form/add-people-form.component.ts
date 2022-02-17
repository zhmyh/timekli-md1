import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-people-form',
  templateUrl: './add-people-form.component.html',
  styleUrls: ['./add-people-form.component.css']
})
export class AddPeopleFormComponent implements OnInit {
  @Output() event = new EventEmitter<string>();
  add_people_form: FormGroup
  countries: any
  constructor(private fb: FormBuilder, private http : HttpClient) {
    this.createForm();
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/countries')
      .subscribe(Response => {

      if (Response) {
        this.countries = Response
      }
    });
  }

  createForm() {
    this.add_people_form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      countries: [null, [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
    if(this.add_people_form.invalid) {
      return;
    } else {
      this.http.post('http://localhost:3000/people', this.add_people_form.value).subscribe(Response => {
        if (Response) {
          this.event.next('addedPoeple');
        }
      })
      return
    }
  }

}
