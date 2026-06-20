import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../../../shared';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [...MATERIAL_MODULES],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {}
