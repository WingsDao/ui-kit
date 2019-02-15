import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiKitModule } from 'ui-kit';

import { environment } from '../environments/environment';
import { APP_ROUTES } from './app-routes';
import { AppComponent } from './app.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { AppCommonModule } from './common/common.module';
import { ComponentsPageModule } from './components-page/components-page.module';
import { GettingStartedPageComponent } from './getting-started-page/getting-started-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PalettesPageComponent } from './palettes-page/palettes-page.component';
import { TypographyPageComponent } from './typography-page/typography-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GettingStartedPageComponent,
    PalettesPageComponent,
    BrandPageComponent,
    TypographyPageComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      enableTracing: !environment.production // debugging purposes only
    }),
    BrowserModule,
    UiKitModule,
    ComponentsPageModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
