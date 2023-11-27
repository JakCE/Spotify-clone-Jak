import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.css'
})
export class AsideMenuComponent {
  isActive: string='Search';
  isMenuDisplay: boolean=true;
  arrayEjemplo: any=[1,2,3,4,5];

  changeActiveDisplay(){
    this.isMenuDisplay=!this.isMenuDisplay;
  }
}
