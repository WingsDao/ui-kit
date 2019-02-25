import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { FooterExampleComponent } from './footer-example.component';
import { DemoModule } from 'src/app/common/demo/demo.module';

describe('FooterExampleComponent', () => {
  let component: FooterExampleComponent;
  let fixture: ComponentFixture<FooterExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterExampleComponent ],
      imports: [UiKitModule, DemoModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
