import { Component } from '@angular/core';
import { PageBannerComponent } from '../../../../shared/components/page-banner/page-banner.component';
import { SwiperCoverflowComponent } from '../../components/swiper-coverflow/swiper-coverflow.component';

@Component({
  selector: 'app-publishers',
  standalone: true,
  imports: [PageBannerComponent, SwiperCoverflowComponent],
  templateUrl: './publishers.component.html'
})
export class PublishersComponent {}
