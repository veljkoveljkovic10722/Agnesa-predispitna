import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL_MODULES } from '../../../../shared';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, ...MATERIAL_MODULES],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {}
