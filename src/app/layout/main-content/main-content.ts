import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main[app-main-content]',
  imports: [RouterOutlet],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {}
