import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'ws-test-wrapper',
  template: `
  <ws-tabs>
    <ws-tab tabTitle="tab 1">Tab 1 content </ws-tab>
    <ws-tab tabTitle="tab 2">Tab 2 content </ws-tab>
    <ws-tab tabTitle="tab 3">Tab 3 content </ws-tab>
  </ws-tabs>
  `
})
export class TestWrapperComponent {}

describe('TabsComponent', () => {
  let tabsWrapper: TabsComponent;
  let tabs: DebugElement[];
  let fixture: ComponentFixture<TestWrapperComponent>;

  function onlyTabSelected(tabIndex: number) {
    for (let i = 0; i < tabs.length; ++i) {
      const debugElement = tabs[i];
      const tab: TabComponent = debugElement.componentInstance;
      const isHidden = debugElement.query(By.css('div')).nativeElement.hasAttribute('hidden');
      if (i === tabIndex) {
        expect(tab.active).toBeTruthy();
        expect(isHidden).toBe(false);
      } else {
        expect(tab.active).toBeFalsy(`${i} tab`);
        expect(isHidden).toBe(true);
      }
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWrapperComponent, TabsComponent, TabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    tabsWrapper = fixture.debugElement.children[0].componentInstance;
    tabs = fixture.debugElement.queryAll(By.directive(TabComponent));
    fixture.detectChanges();
  });

  it('should create ws-tabs with ws-tab\'s inside', () => {
    expect(tabsWrapper).toBeTruthy();
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(3);
  });

  it('should be selected 1st ws-tab by default', async () => {
    fixture.whenStable().then(() => onlyTabSelected(0));
  });

  it('should select 2nd ws-tab on tabTitle click', () => {
    fixture.debugElement.query(By.css('ul > li:nth-child(2)')).nativeElement.click();
    fixture.detectChanges();
    onlyTabSelected(1);
  });
});
