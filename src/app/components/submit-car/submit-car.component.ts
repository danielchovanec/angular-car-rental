import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICars } from 'src/app/Cars';

@Component({
  selector: 'app-submit-car',
  templateUrl: './submit-car.component.html',
  styleUrls: ['./submit-car.component.css']
})
export class SubmitCarComponent implements OnInit {

  @Output() onAddCar: EventEmitter<ICars> = new EventEmitter();

  manufacturer!: string;
  model!: string;
  yearOfMake!: string;
  power!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.manufacturer) {
      alert('No manufacturer given');
      return;
    } else if(!this.model) {
      alert('No model given')
      return;
    } else if (!this.yearOfMake) {
      alert('No Year of make given');
      return;
    } else if (!this.power) {
      alert('No power given')
      return;
    }

    const newCar = {
      manufacturer: this.manufacturer,
      model: this.model,
      yearOfMake: this.yearOfMake,
      power: this.power
    }

    this.onAddCar.emit(newCar);

    this.manufacturer = '';
    this.model = '';
    this.yearOfMake = '';
    this.power = '';
    alert('Car successfully added');
  }

}
