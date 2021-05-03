import { Injectable } from '@angular/core';
import * as data from './searchResults.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getData() {
    return data.candidates;
  }
}