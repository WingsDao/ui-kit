import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ws-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() hidden = false;
  @Input() name: string;
}
