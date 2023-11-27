import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component'
import { MusicTableComponent } from '../music-table/music-table.component'
import { PlayerComponent } from '../player/player.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,AsideMenuComponent,MusicTableComponent,PlayerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
