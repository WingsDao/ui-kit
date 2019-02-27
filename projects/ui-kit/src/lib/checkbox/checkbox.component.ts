import { Component } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../../common/abstract-value-accessor';

@Component({
  selector: 'ws-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [MakeProvider(CheckboxComponent)]
})
export class CheckboxComponent extends AbstractValueAccessor<boolean> {
  toggle() {
    this.value = !this.value;
  }

  setDisabledState(isDisabled: boolean) {
    throw new Error('Method not implemented.');
  }
}
