import { NgModule } from '@angular/core';
import { PrismModule } from '@ngx-prism/core';
import { UiKitModule } from 'ui-kit';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './demo.component';

@NgModule({
  imports: [PrismModule, UiKitModule, CommonModule],
  exports: [DemoComponent],
  declarations: [DemoComponent],
  providers: [],
})
export class DemoModule { }
