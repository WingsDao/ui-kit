import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from 'ui-kit';

import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentsSidebarComponent } from './components-sidebar/components-sidebar.component';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [PageComponent, SidebarComponent, ComponentsSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiKitModule,
    DemoModule
  ],
  exports: [
    PageComponent,
    ComponentsSidebarComponent
  ]
})
export class AppCommonModule { }
