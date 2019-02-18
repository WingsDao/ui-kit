import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from 'ui-kit';
import { DemoComponent } from './demo/demo.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentsSidebarComponent } from './components-sidebar/components-sidebar.component';

@NgModule({
  declarations: [PageComponent, SidebarComponent, DemoComponent, ComponentsSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiKitModule
  ],
  exports: [
    PageComponent,
    DemoComponent,
    ComponentsSidebarComponent
  ]
})
export class AppCommonModule { }
