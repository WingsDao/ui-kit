import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss']
})
export class InputExampleComponent implements OnInit {

  value = 'some default value';
  constructor() { }

  ngOnInit() {
  }

}
