import { AfterViewInit, Component } from '@angular/core';
import DataTable from 'datatables.net-dt';



@Component({
  selector: 'app-data-tables-example',
  imports: [],
  templateUrl: './data-tables-example.html',
  styles: ``,
})
export default class DataTablesExample implements AfterViewInit {

  ngAfterViewInit(): void {
    new DataTable('#example');
  }


}
