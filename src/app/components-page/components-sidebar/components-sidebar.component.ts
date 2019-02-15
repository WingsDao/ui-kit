import { Component, OnInit } from '@angular/core';
import { ComponentsRouting } from '../../../enums/routing.enum';

@Component({
  selector: 'ws-components-sidebar',
  templateUrl: './components-sidebar.component.html',
  styleUrls: ['./components-sidebar.component.scss']
})
export class ComponentsSidebarComponent implements OnInit {
  ROUTING = ComponentsRouting;
  constructor() { }

  ngOnInit() {
  }
}
