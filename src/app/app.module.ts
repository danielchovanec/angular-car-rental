import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListOfCarsComponent } from './components/list-of-cars/list-of-cars.component';
import { SingleCarComponent } from './components/single-car/single-car.component';
import { ButtonComponent } from './components/button/button.component';
import { DeleteCarComponent } from './components/delete-car/delete-car.component';
import { AboutComponent } from './components/about/about.component';
import { RentFormComponent } from './components/rent-form/rent-form.component';
import { FormsModule } from '@angular/forms';
import { AddCarComponent } from './components/add-car-component/add-car.component';
import { SubmitCarComponent } from './components/submit-car/submit-car.component';

const appRoutes: Routes = [
  {path: '', component: ListOfCarsComponent},
  {path: 'addCar', component: AddCarComponent},
  {path: 'deleteCar', component: DeleteCarComponent},
  {path: 'about', component: AboutComponent},
  {path: 'rentForm', component: RentFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfCarsComponent,
    SingleCarComponent,
    ButtonComponent,
    DeleteCarComponent,
    AboutComponent,
    RentFormComponent,
    AddCarComponent,
    SubmitCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
