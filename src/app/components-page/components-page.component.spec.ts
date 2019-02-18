import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AppCommonModule } from '../common/common.module';
import { ComponentsPageComponent } from './components-page.component';

describe('ComponentsPageComponent', () => {
  let component: ComponentsPageComponent;
  let fixture: ComponentFixture<ComponentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsPageComponent ],
      imports: [AppCommonModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
