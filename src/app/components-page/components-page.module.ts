import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from 'ui-kit';
import { FormsModule } from '@angular/forms';

import { AppCommonModule } from '../common/common.module';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { CheckboxExampleComponent } from './checkbox-example/checkbox-example.component';
import { ComponentsPageComponent } from './components-page.component';
import { HelpExampleComponent } from './help-example/help-example.component';
import { IconExampleComponent } from './icon-example/icon-example.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { RadioButtonExampleComponent } from './radio-button-example/radio-button-example.component';
import { RadioExampleComponent } from './radio-example/radio-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';
import { TransactionExampleComponent } from './transaction-example/transaction-example.component';
import { SearchExampleComponent } from './search-example/search-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { NavBarExampleComponent } from './nav-bar-example/nav-bar-example.component';
import { FooterExampleComponent } from './footer-example/footer-example.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { DemoModule } from '../common/demo/demo.module';

@NgModule({
  declarations: [
    ComponentsPageComponent,
    InputExampleComponent,
    ButtonExampleComponent,
    CheckboxExampleComponent,
    TabsExampleComponent,
    SwitchExampleComponent,
    TransactionExampleComponent,
    RadioButtonExampleComponent,
    RadioExampleComponent,
    IconExampleComponent,
    HelpExampleComponent,
    SearchExampleComponent,
    TableExampleComponent,
    NavBarExampleComponent,
    FooterExampleComponent,
    ModalExampleComponent],
  imports: [
    CommonModule,
    UiKitModule,
    RouterModule,
    AppCommonModule,
    DemoModule,
    FormsModule
  ]
})
export class ComponentsPageModule { }
