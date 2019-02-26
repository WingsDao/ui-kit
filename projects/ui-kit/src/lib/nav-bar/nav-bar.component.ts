import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ws-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
