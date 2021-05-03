import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() searchTerm;
  @Input() numOfResults;

  tabs = [
    {title: 'Candidates', count: 0},
    {title: 'Jobs', count: 0},
    {title: 'Employees', count: 0},
    {title: 'Campaigns', count: 0},
    {title: 'More', count: 0}
  ]

  constructor() { }

  ngOnInit() { }

}