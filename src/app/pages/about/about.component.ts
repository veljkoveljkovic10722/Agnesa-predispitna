import { Component } from '@angular/core';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { MATERIAL_MODULES } from '../../shared';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [...MATERIAL_MODULES, NgxScrollAnimationsDirective, PageBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}
