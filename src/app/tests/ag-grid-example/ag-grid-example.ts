import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, TextFilterModule, ModuleRegistry, colorSchemeDarkBlue, themeQuartz } from 'ag-grid-community';

ModuleRegistry.registerModules([TextFilterModule]);

@Component({
  selector: 'app-ag-grid-example',
  imports: [AgGridAngular],
  templateUrl: './ag-grid-example.html',
  styles: `
    ag-grid-angular {
    display: block;
    height: 400px;
  }
  `,
})
export default class AgGridExample {

  theme = themeQuartz.withPart(colorSchemeDarkBlue);
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
}
