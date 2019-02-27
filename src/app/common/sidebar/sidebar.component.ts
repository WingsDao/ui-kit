import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AppRouting } from '../../../enums/routing.enum';
import {version} from '../../../../package.json';

@Component({
  selector: 'ws-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  ROUTING = AppRouting;
  visible = false;
  isMainMenuVisible = false;
  isComponentsMenuVisible = false;
  version = version;

  constructor(private router: Router) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.router.events
      .pipe(untilDestroyed(this))
      .subscribe(() => this.setVisibility());
  }

  setVisibility(visible = false, isMainMenuVisible = false, isComponentsMenuVisible = false) {
    this.visible = visible;
    this.isMainMenuVisible = isMainMenuVisible;
    this.isComponentsMenuVisible = isComponentsMenuVisible;
  }

  buildRoute(routing: AppRouting) {
    return '/' + routing;
  }


}
