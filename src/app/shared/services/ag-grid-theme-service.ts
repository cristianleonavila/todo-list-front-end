import { Injectable, signal } from '@angular/core';
import { colorSchemeDarkBlue, themeQuartz, Theme, colorSchemeLight } from 'ag-grid-community';
import { AppThemes } from './app-themes';

@Injectable({
  providedIn: 'root',
})
export class AgGridThemeService {

  theme = signal<Theme>(themeQuartz.withPart(colorSchemeLight));

  constructor() {
    const storedTheme = localStorage.getItem('lte-theme');

    if (storedTheme === 'dark' || storedTheme === 'light') {
      this.changeTheme(storedTheme);
    }
  }

  changeTheme(theme: AppThemes) {
    let _theme: Theme;
    switch (theme) {
      case 'dark':
        _theme = themeQuartz.withPart(colorSchemeDarkBlue);
      break;
      case 'light':
        _theme = themeQuartz.withPart(colorSchemeLight);
      break;
      default:
        _theme = themeQuartz.withPart(colorSchemeLight);
    }
    this.theme.set(_theme);
  }

}
