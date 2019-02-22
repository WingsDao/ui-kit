import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ws-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() back = new EventEmitter();
  @Output() close = new EventEmitter();
  showBackBtn = false;
  showCloseBtn = false;
  ngOnInit() {
    this.showBackBtn = this.back.observers.length > 0;
    this.showCloseBtn = this.close.observers.length > 0;
  }
}
