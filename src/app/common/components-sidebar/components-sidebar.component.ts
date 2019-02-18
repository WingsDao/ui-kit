import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentsRouting } from '../../../enums/routing.enum';

@Component({
  selector: 'ws-components-sidebar',
  templateUrl: './components-sidebar.component.html',
  styleUrls: ['./components-sidebar.component.scss']
})
export class ComponentsSidebarComponent {
  ROUTING = ComponentsRouting;
  @Input() baseUrl = '';
  @Output() back = new EventEmitter();

  buildRoute(route: ComponentsRouting) {
    return this.baseUrl + route;
  }
}
