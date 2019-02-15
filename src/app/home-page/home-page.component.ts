import { Component, OnInit } from '@angular/core';
import { AppRouting } from '../../enums/routing.enum';

@Component({
  selector: 'ws-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  ROUTING = AppRouting;
  constructor() { }

  ngOnInit() {
  }

  buildRoute(routing: AppRouting) {
    return '/' + routing;
  }
}
