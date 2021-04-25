import { Component } from '@angular/core';
import * as data from './searchResults.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    console.log(data);
  }
}
