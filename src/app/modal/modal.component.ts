import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() candidate;

  constructor() { }

  ngOnInit() { }

  closeModal() {
    this.close.emit();
  }

}