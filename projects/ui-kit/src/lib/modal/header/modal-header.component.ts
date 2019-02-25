import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ws-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Output() back = new EventEmitter();
  @Output() close = new EventEmitter();

  showBackBtn = false;
  showCloseBtn = false;

  ngOnInit() {
    this.showBackBtn = this.back.observers.length > 0;
    this.showCloseBtn = this.close.observers.length > 0;
  }
}
