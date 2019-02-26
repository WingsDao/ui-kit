import { Routes } from '@angular/router';

import { AppRouting, ComponentsRouting } from '../enums/routing.enum';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { ButtonExampleComponent } from './components-page/button-example/button-example.component';
import { CheckboxExampleComponent } from './components-page/checkbox-example/checkbox-example.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { HelpExampleComponent } from './components-page/help-example/help-example.component';
import { IconExampleComponent } from './components-page/icon-example/icon-example.component';
import { InputExampleComponent } from './components-page/input-example/input-example.component';
import { RadioButtonExampleComponent } from './components-page/radio-button-example/radio-button-example.component';
import { RadioExampleComponent } from './components-page/radio-example/radio-example.component';
import { SwitchExampleComponent } from './components-page/switch-example/switch-example.component';
import { TabsExampleComponent } from './components-page/tabs-example/tabs-example.component';
import { SearchExampleComponent } from './components-page/search-example/search-example.component';
import { TableExampleComponent } from './components-page/table-example/table-example.component';
import { ModalExampleComponent } from './components-page/modal-example/modal-example.component';
import { TransactionExampleComponent } from './components-page/transaction-example/transaction-example.component';
import { FooterExampleComponent } from './components-page/footer-example/footer-example.component';
import { GettingStartedPageComponent } from './getting-started-page/getting-started-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PalettesPageComponent } from './palettes-page/palettes-page.component';
import { TypographyPageComponent } from './typography-page/typography-page.component';
import { NavBarExampleComponent } from './components-page/nav-bar-example/nav-bar-example.component';

const CHILD_ROUTES: Routes = [
  {path: '', redirectTo: ComponentsRouting.Input, pathMatch: 'full'},
  {path: ComponentsRouting.Input, component: InputExampleComponent},
  {path: ComponentsRouting.Button, component: ButtonExampleComponent},
  {path: ComponentsRouting.Tabs, component: TabsExampleComponent},
  {path: ComponentsRouting.Checkbox, component: CheckboxExampleComponent},
  {path: ComponentsRouting.Switch, component: SwitchExampleComponent},
  {path: ComponentsRouting.Transaction, component: TransactionExampleComponent},
  {path: ComponentsRouting.RadioButton, component: RadioButtonExampleComponent},
  {path: ComponentsRouting.Radio, component: RadioExampleComponent},
  {path: ComponentsRouting.Icon, component: IconExampleComponent},
  {path: ComponentsRouting.Help, component: HelpExampleComponent},
  {path: ComponentsRouting.Search, component: SearchExampleComponent},
  {path: ComponentsRouting.Table, component: TableExampleComponent},
  {path: ComponentsRouting.NavBar, component: NavBarExampleComponent},
  {path: ComponentsRouting.Footer, component: FooterExampleComponent},
  {path: ComponentsRouting.Modal, component: ModalExampleComponent},
];

export const APP_ROUTES: Routes = [

  { path: AppRouting.Home,
    component: HomePageComponent
  },
  { path: AppRouting.GettingStarted, component: GettingStartedPageComponent },
  { path: AppRouting.Palettes, component: PalettesPageComponent },
  { path: AppRouting.Typography, component: TypographyPageComponent },
  { path: AppRouting.Brand, component: BrandPageComponent },
  { path: AppRouting.Components, component: ComponentsPageComponent, children: CHILD_ROUTES},
  {
    path: '**',
    redirectTo: `/${AppRouting.Home}`,
    pathMatch: 'full'
  },
];
