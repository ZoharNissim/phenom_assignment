import { Component } from '@angular/core';
import { DataService } from './data.service';
import { UtilitiesService } from './utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data;
  filteredData;
  searchTerm;
  numOfResults;
  sortByName = true;
  
  constructor( private DataService: DataService, private UtilitiesService: UtilitiesService ) { }

  ngOnInit() {
    this.data = this.DataService.getData();
    this.data.forEach(candidate => {
      candidate.socialProfile.forEach(item => {
        item.type === "LinkedIn" ? candidate.linkedInProfileURL = item.profileLink : null;
      });
    });
  }

  handleInputChange(value) {
    this.searchTerm = value;
    this.filteredData = this.data.filter(candidate =>
      candidate.currentCompany.jobTitle.includes(this.searchTerm)
    );
    this.sort(this.sortByName ? 'name' : 'seniority');
    this.numOfResults = this.filteredData.length;
    setTimeout(() => this.highlight());
  }

  addToJobBtnClicked(candidate) {
    let arr = [];
    this.filteredData.forEach(item => {
      item !== candidate ? arr.push(item) : null;
    });
    this.filteredData = arr;
    this.sort(this.sortByName ? 'name' : 'seniority');
  }

  seeMore() {
    this.filteredData = this.data;
    this.sort(this.sortByName ? 'name' : 'seniority');
  }

  highlight() {
    for (let i in this.filteredData) {
      let element = document.getElementById(`candidate${i}`);
      let opar = this.filteredData[i].currentCompany.jobTitle;
      element.innerHTML = opar;

      let search = this.searchTerm;
      search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      let re = new RegExp(search, 'g');
    
      if (search.length > 0) {
        element.innerHTML = opar.replace(re, `<mark>$&</mark>`);
      } else {
        element.innerHTML = opar;
      }
    }
  }

  sort(type) {
    this.sortByName = type === 'name';

    this.filteredData.sort((a, b) => {
      let first = this.sortByName ? `${a.firstName.trim()} ${a.lastName.trim()}` : this.numberOfMonthsPassed(a.currentCompany.startDate);
      let second = this.sortByName ? `${b.firstName.trim()} ${b.lastName.trim()}` : this.numberOfMonthsPassed(b.currentCompany.startDate);
      
      return this.sortByName ? first.localeCompare(second) : first < second ? 1 : first > second ? -1 : 0;
    });
  }

  numberOfMonthsPassed(date) {
    return this.UtilitiesService.numberOfMonthsPassed(date);
  }
}