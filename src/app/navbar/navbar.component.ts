import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTerm = 'UX Designer';
  @Output() handleInputChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.onInputChange();
  }

  onInputChange() {
    this.handleInputChange.emit(this.searchTerm);
  }
}