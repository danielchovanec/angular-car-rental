import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICars } from 'src/app/Cars';
import { CARS } from 'src/app/carsData';
import { CarsServiceService } from 'src/app/cars-service.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {

  @Input() car!: ICars
  @Output() onDeleteCar: EventEmitter<ICars> = new EventEmitter();

  cars: ICars[] = [];

  constructor(private carService: CarsServiceService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => this.cars = cars)
  }

  onDelete(car: any) {
    this.onDeleteCar.emit(car);
  }

  // deleteCar(car: ICars) {
  //   if(confirm('Are you sure? ')) {
  //     this.carService.deleteCar(car).subscribe(() => (this.cars = this.cars.filter(t => t.id !== car.id)))
  //   }
  //     else {
  //       console.log('nothing changed')
  //     }

  // }

}
