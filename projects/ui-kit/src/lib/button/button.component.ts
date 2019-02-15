import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() loading: boolean;
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() {
  }

}
