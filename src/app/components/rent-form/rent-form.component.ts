import { Component, OnInit } from '@angular/core';
import { CARS } from 'src/app/carsData';
import { ICars } from 'src/app/Cars';
import { CarsServiceService } from 'src/app/cars-service.service';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  cars: ICars[] =[]

  name!: string;
  surname!: string;
  address!: string;
  country!: string;
  carsOption!: any;

  constructor(private carService: CarsServiceService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => this.cars = cars)
  }

  onSubmit() {
    if(!this.name) {
      alert('No name given');
      return;
    } else if(!this.surname){
      alert('No surname given');
      return;
    } else if(!this.address){
      alert('No address given');
      return;
    } else if(!this.country){
      alert('No country given');
      return;
    } else if(!this.carsOption){
      alert('No option selected');
      return;
    }

  console.log(this.name + ' ' + this.surname + ', ' + this.address
    + ', ' + this.country + ' Car: ' + this.carsOption)

    this.name = '';
    this.surname = '';
    this.address = '';
    this.country = '';
    this.carsOption = 'Select option..';


  }


}
