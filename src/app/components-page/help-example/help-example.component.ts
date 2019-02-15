import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-help-example',
  templateUrl: './help-example.component.html',
  styleUrls: ['./help-example.component.scss']
})
export class HelpExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('clicked');
  }
}
