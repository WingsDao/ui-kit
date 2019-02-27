import { Component} from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../../common/abstract-value-accessor';

@Component({
  selector: 'ws-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [MakeProvider(SwitchComponent)]
})
export class SwitchComponent extends AbstractValueAccessor<boolean> {
  setDisabledState(isDisabled: boolean) {
    throw new Error('Method not implemented.');
  }
}
