import { ICars } from 'src/app/Cars';
import { Component, OnInit } from '@angular/core';
import { CarsServiceService } from 'src/app/cars-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {


  constructor(private carService: CarsServiceService) { }

  cars: ICars[] = [];

  ngOnInit(): void {
  }

  addCar(car: ICars){
    this.carService.addCar(car).subscribe((car) => this.cars.push(car))
  }

}
