import { Component, inject, OnInit, signal, AfterViewInit } from '@angular/core';
import { ColorModeToggle } from '@layout/navbar/end-links/color-mode-toggle/color-mode-toggle';
import { AgGridThemeService } from '@shared/services/ag-grid-theme-service';
import { initialize } from 'admin-lte';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, TextFilterModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([TextFilterModule]);

@Component({
  selector: 'app-ag-grid-example',
  imports: [AgGridAngular, ColorModeToggle],
  templateUrl: './ag-grid-example.html',
  styles: `
    ag-grid-angular {
    display: block;
    height: 400px;
  }
  `,
})
export default class AgGridExample implements AfterViewInit {

  agThemeService = inject(AgGridThemeService);

  rowData = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@test.com',
      age: 25
    },
    {
      id: 2,
      name: 'Ana Gómez',
      email: 'ana@test.com',
      age: 31
    },
    {
      id: 3,
      name: 'Pedro López',
      email: 'pedro@test.com',
      age: 28
    }
  ];

  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'name',
      headerName: 'Nombre',
      filter: true
    },
    {
      field: 'email',
      headerName: 'Correo'
    },
    {
      field: 'age',
      headerName: 'Edad'
    }
  ];

  ngAfterViewInit(): void {
    initialize();
  }
}
