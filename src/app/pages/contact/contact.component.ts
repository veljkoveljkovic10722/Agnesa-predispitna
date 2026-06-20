import { Component } from '@angular/core';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { ContactFormComponent } from './sections/contact-form/contact-form.component';
import { ContactInfoComponent } from './sections/contact-info/contact-info.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgxScrollAnimationsDirective, PageBannerComponent, ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {}
