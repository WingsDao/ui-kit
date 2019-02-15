import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ws-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  _value: boolean;

  @Output() valueChange = new EventEmitter<boolean>();

  @Input()
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.valueChange.emit(val);
  }
}
