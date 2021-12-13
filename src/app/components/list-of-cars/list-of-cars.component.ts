import { Component, OnInit } from '@angular/core';
import { ICars } from 'src/app/Cars';
import { CARS } from 'src/app/carsData';
import { CarsServiceService } from 'src/app/cars-service.service';

@Component({
  selector: 'app-list-of-cars',
  templateUrl: './list-of-cars.component.html',
  styleUrls: ['./list-of-cars.component.css']
})
export class ListOfCarsComponent implements OnInit {

  cars: ICars[] = [];

  constructor(private carService: CarsServiceService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => this.cars = cars);
  }


  deleteCar(car: ICars) {
    if(confirm('Are you sure? ')) {
      this.carService.deleteCar(car).subscribe(() => (this.cars = this.cars.filter(t => t.id !== car.id)))
    }
      else {
        console.log('nothing changed')
      }

  // }

  //  addCar(car: ICars){
  //   this.carService.addCar(car).subscribe
  // }

    }
  }
