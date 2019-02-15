import { Component, OnInit } from '@angular/core';
import { AppRouting } from '../../../enums/routing.enum';

@Component({
  selector: 'ws-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ROUTING = AppRouting;
  constructor() {}

  ngOnInit() {
  }

  buildRoute(routing: AppRouting) {
    return '/' + routing;
  }
}
