import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() id;
  @Input() candidate;
  @Input() searchTerm;
  @Output() addToJob = new EventEmitter();

  constructor( private UtilitiesService: UtilitiesService ) { }

  ngOnInit() { }

  addToJobBtnClicked() {
    this.addToJob.emit(this.candidate);
  }

  handleEllipsis(event, title) {
    event.target.title = "";
    if (event.target.offsetWidth !== event.target.scrollWidth) {
      event.target.title = title;
    }
  }

  handleDate(date) {
    let months = this.numberOfMonthsPassed(date);
    let years = Math.floor(months / 12);
    months = months - (years * 12);

    let yrsStr = years > 0 ? `${years} yrs ` : '';
    let mosStr = months > 0 ? `${months} mos` : '';

    return yrsStr + mosStr;
  }

  numberOfMonthsPassed(date) {
    return this.UtilitiesService.numberOfMonthsPassed(date);
  }
}