import { Component, Input } from '@angular/core';

@Component({
  selector: 'ws-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() svgPath: string;
}
