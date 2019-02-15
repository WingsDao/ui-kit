import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedPageComponent } from './getting-started-page.component';
import { AppCommonModule } from '../common/common.module';
import { AppModule } from '../app.module';

describe('GettingStartedPageComponent', () => {
  let component: GettingStartedPageComponent;
  let fixture: ComponentFixture<GettingStartedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppCommonModule, AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
