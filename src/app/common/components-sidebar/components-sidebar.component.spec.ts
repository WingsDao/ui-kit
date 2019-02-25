import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UiKitModule } from 'ui-kit';

import { ComponentsSidebarComponent } from './components-sidebar.component';
import { DemoModule } from '../demo/demo.module';

describe('ComponentsSidebarComponent', () => {
  let component: ComponentsSidebarComponent;
  let fixture: ComponentFixture<ComponentsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSidebarComponent ],
      imports: [RouterTestingModule, UiKitModule, DemoModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
