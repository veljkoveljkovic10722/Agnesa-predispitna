import { Component } from '@angular/core';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { MATERIAL_MODULES } from '../../../../shared';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [...MATERIAL_MODULES, NgxScrollAnimationsDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {}
