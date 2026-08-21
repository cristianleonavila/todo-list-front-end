import { Component, inject, OnInit } from '@angular/core';
import { AgGridThemeService } from '@shared/services/ag-grid-theme-service';
import { AppThemes } from '@shared/services/app-themes';

@Component({
  selector: 'li[app-color-mode-toggle]',
  imports: [],
  templateUrl: './color-mode-toggle.html'
})
export class ColorModeToggle {

  agGridThemeService = inject(AgGridThemeService);

  changeAgGridTheme(theme: AppThemes) {
    this.agGridThemeService.changeTheme(theme);
  }

}
