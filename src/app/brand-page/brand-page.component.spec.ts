import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { APP_ROUTES } from '../app-routes';
import { AppModule } from '../app.module';
import { AppCommonModule } from '../common/common.module';
import { BrandPageComponent } from './brand-page.component';

describe('BrandPageComponent', () => {
  let component: BrandPageComponent;
  let fixture: ComponentFixture<BrandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppCommonModule, AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
