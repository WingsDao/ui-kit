import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UiKitModule } from 'ui-kit';

import { DemoComponent } from '../../common/demo/demo.component';
import { ComponentsSidebarComponent } from './components-sidebar.component';

describe('ComponentsSidebarComponent', () => {
  let component: ComponentsSidebarComponent;
  let fixture: ComponentFixture<ComponentsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSidebarComponent, DemoComponent ],
      imports: [RouterTestingModule, UiKitModule]
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
