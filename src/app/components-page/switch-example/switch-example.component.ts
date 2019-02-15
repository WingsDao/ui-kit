import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-switch-example',
  templateUrl: './switch-example.component.html',
  styleUrls: ['./switch-example.component.scss']
})
export class SwitchExampleComponent implements OnInit {

  isChecked = true;
  constructor() { }

  ngOnInit() {
  }

}
