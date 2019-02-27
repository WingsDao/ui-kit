import { Component, Input } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../../common/abstract-value-accessor';

@Component({
  selector: 'ws-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [MakeProvider(InputComponent)]
})
export class InputComponent extends AbstractValueAccessor<string> {
  @Input() error: boolean;
  @Input() disabled: boolean;
  @Input() message: string;
  @Input() label: string;
  @Input() type: string;

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
