import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';
import { AppCommonModule } from '../common/common.module';
import { TypographyPageComponent } from './typography-page.component';

describe('TypographyPageComponent', () => {
  let component: TypographyPageComponent;
  let fixture: ComponentFixture<TypographyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppCommonModule, AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
