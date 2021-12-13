import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICars } from 'src/app/Cars';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {

  @Input() car!: ICars
  @Output() onDeleteCar: EventEmitter<ICars> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(car: any) {
    this.onDeleteCar.emit(car);
  }

}
