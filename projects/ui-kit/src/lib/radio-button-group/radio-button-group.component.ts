import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractValueAccessor, MakeProvider } from '../../common/abstract-value-accessor';

@Component({
  selector: 'ws-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
  providers: [MakeProvider(RadioButtonGroupComponent)]
})
export class RadioButtonGroupComponent<T = any> extends AbstractValueAccessor<T> {
  @Input() name: string;

  setDisabledState(isDisabled: boolean) {
    throw new Error('Method not implemented.');
  }
}
