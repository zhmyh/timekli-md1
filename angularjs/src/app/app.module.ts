import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule } from '@angular/router';
import { PeopleBoxComponent } from './people-box/people-box.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryBoxComponent } from './country-box/country-box.component';
import { CurrencyPipe } from './currency.pipe';
import { MapViewComponent } from './map-view/map-view.component';
import { AddPeopleFormComponent } from './add-people-form/add-people-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    CountriesComponent,
    PeopleBoxComponent,
    CountryBoxComponent,
    CurrencyPipe,
    MapViewComponent,
    AddPeopleFormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'people', component: PeopleComponent},
      {path: 'countries', component: CountriesComponent},
      {path: '', redirectTo: '/people', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
