import { Component, Input } from '@angular/core';

@Component({
  selector: 'ws-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {
  @Input() showBackBtn = false;
  @Input() showCloseBtn = false;
}
