import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { GlobalStylesComponent } from './global-styles/global-styles.component';
import { HelpComponent } from './help/help.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { RadioButtonGroupComponent } from './radio-button-group/radio-button-group.component';
import { RadioButtonComponent } from './radio-button-group/radio-button/radio-button.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioComponent } from './radio-group/radio/radio.component';
import { SwitchComponent } from './switch/switch.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { ModalHeaderComponent } from './modal/header/modal-header.component';
import { ModalRouterComponent } from './modal/router/modal-router.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    GlobalStylesComponent,
    CheckboxComponent,
    SwitchComponent,
    TransactionComponent,
    TabsComponent,
    TabComponent,
    RadioButtonComponent,
    RadioComponent,
    IconComponent,
    HelpComponent,
    RadioGroupComponent,
    RadioButtonGroupComponent,
    SearchComponent,
    TableComponent,
    NavBarComponent,
    FooterComponent,
    ModalHeaderComponent,
    ModalComponent,
    ModalRouterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    GlobalStylesComponent,
    CheckboxComponent,
    SwitchComponent,
    TransactionComponent,
    TabsComponent,
    TabComponent,
    RadioButtonComponent,
    RadioButtonGroupComponent,
    RadioGroupComponent,
    RadioComponent,
    IconComponent,
    HelpComponent,
    SearchComponent,
    TableComponent,
    NavBarComponent,
    FooterComponent,
    ModalHeaderComponent,
    ModalComponent,
    ModalRouterComponent
  ],
})
export class UiKitModule { }
