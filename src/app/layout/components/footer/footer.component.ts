import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL_MODULES } from '../../../shared';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ...MATERIAL_MODULES],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
