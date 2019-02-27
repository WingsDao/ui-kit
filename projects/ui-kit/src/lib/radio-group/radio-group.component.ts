import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractValueAccessor, MakeProvider } from '../../common/abstract-value-accessor';

@Component({
  selector: 'ws-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [MakeProvider(RadioGroupComponent)]
})
export class RadioGroupComponent<T = any> extends AbstractValueAccessor<T> {
  @Input() name: string;

  setDisabledState(isDisabled: boolean) {
    throw new Error('Method not implemented.');
  }
}
