import { ICars } from 'src/app/Cars';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { CARS } from './carsData';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  private apiUrl = 'http://localhost:5010/cars'

  constructor(private http: HttpClient) { }

  getCars(): Observable<ICars[]> {
    return this.http.get<ICars[]>(this.apiUrl);
  }

  deleteCar(car: ICars): Observable<ICars> {
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.delete<ICars>(url);
  }

  addCar(car: ICars): Observable<ICars> {
    return this.http.post<ICars>(this.apiUrl, car, httpOptions);
  }
}
