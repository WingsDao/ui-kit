import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitModule } from 'ui-kit';

import { HelpExampleComponent } from './help-example.component';
import { DemoModule } from 'src/app/common/demo/demo.module';

describe('HelpExampleComponent', () => {
  let component: HelpExampleComponent;
  let fixture: ComponentFixture<HelpExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpExampleComponent ],
      imports: [UiKitModule, DemoModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
