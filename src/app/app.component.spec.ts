import { Location } from '@angular/common';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UiKitModule } from 'ui-kit';

import { APP_ROUTES } from './app-routes';
import { AppComponent } from './app.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { AppCommonModule } from './common/common.module';
import { ComponentsPageModule } from './components-page/components-page.module';
import { GettingStartedPageComponent } from './getting-started-page/getting-started-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PalettesPageComponent } from './palettes-page/palettes-page.component';
import { TypographyPageComponent } from './typography-page/typography-page.component';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomePageComponent,
        GettingStartedPageComponent,
        PalettesPageComponent,
        BrandPageComponent,
        TypographyPageComponent
      ],
      imports: [
        UiKitModule,
        RouterTestingModule.withRoutes(APP_ROUTES),
        ComponentsPageModule,
        AppCommonModule
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));
});
