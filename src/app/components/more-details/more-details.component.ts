import { ICars } from './../../Cars';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  @Input() car!: ICars;

  constructor() { }

  ngOnInit(): void {
  }

}
