import { Component } from '@angular/core';

@Component({
  selector: 'ws-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent {
  selectedRoute = 'first';
  isRouteVisible = false;

  onBack() {
    // do something
  }

  onClose() {
    // do something
  }
}
