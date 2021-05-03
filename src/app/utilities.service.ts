import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() { }

  numberOfMonthsPassed(date) {
    let startDate = new Date(date);
    let now = new Date();

    let months;

    months = (now.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += now.getMonth();

    return months;
  }
}