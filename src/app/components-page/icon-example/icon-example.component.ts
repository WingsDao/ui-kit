import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-icon-example',
  templateUrl: './icon-example.component.html',
  styleUrls: ['./icon-example.component.scss']
})
export class IconExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('clicked');
  }
}
