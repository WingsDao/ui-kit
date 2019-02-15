import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ws-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
