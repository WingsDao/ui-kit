import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ws-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() error: boolean;
  @Input() disabled: boolean;
  @Input() message: string;
  @Input() label: string;
  @Input() type: string;

  private _value: string;
  @Output() valueChange = new EventEmitter<string>();
  @Input()
  get value() {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.valueChange.emit(val);
  }
}
