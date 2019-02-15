import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ws-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss']
})
export class RadioButtonGroupComponent<T = any> {
  private _value: T;
  private _name: string;
  @Output() selectedChange = new EventEmitter<T>();

  private nameSource = new BehaviorSubject('default-radio-group');
  currentName = this.nameSource.asObservable();

  private selectedSource = new BehaviorSubject(null);
  currentSelected = this.selectedSource.asObservable();

  @Input()
  get selected() {return this._value; }
  set selected(val: T) {
    this._value = val;
    this.selectedChange.emit(val);
    this.selectedSource.next(val);
  }

  @Input()
  get name() {return this._name; }
  set name(newName: string) {
    this._name = newName;
    this.nameSource.next(newName);
  }
}
