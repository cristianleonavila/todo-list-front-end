import { Component } from '@angular/core';
import { ToggleFullScreen } from './toggle-full-screen/toggle-full-screen';
import { ColorModeToggle } from './color-mode-toggle/color-mode-toggle';
import { UserDropdown } from './user-dropdown/user-dropdown';

@Component({
  selector: 'ul[app-end-links]',
  imports: [ToggleFullScreen, ColorModeToggle, UserDropdown],
  templateUrl: './end-links.html',
  styleUrl: './end-links.scss',
})
export class EndLinks {}
