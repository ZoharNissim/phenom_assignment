import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  sortOptionOpen = false;
  modalOpen = false;
  selectedCandidate;

  @Input() data;
  @Input() filteredData;
  @Input() searchTerm;
  @Input() sortByName;
  @Output() addToJob = new EventEmitter();
  @Output() seeMore = new EventEmitter();
  @Output() sort = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  seeMoreBtnClicked() {
    this.seeMore.emit();
  }

  addToJobBtnClicked(candidate) {
    this.addToJob.emit(candidate);
    this.modalOpen = true;
    this.selectedCandidate = `${candidate.firstName} ${candidate.lastName}`;
  }

  handleSort(type) {
    this.sort.emit(type);
    this.sortOptionOpen = false;
  }

  dropdownClicked() {
    this.sortOptionOpen = !this.sortOptionOpen;
  }

  closeModal() {
    this.modalOpen = false;
  }

  areArraysEqual(array1, array2) {
    return (array1.length == array2.length) && array1.every((element, index) => {
      return element === array2[index]; 
    });
  }
}