import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';
import { AppCommonModule } from '../common/common.module';
import { BrandPageComponent } from './brand-page.component';
import { DemoModule } from '../common/demo/demo.module';

describe('BrandPageComponent', () => {
  let component: BrandPageComponent;
  let fixture: ComponentFixture<BrandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppCommonModule, AppModule, DemoModule]
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
