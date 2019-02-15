import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ws-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
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

  toggle() {
    this.value = !this.value;
  }
}
