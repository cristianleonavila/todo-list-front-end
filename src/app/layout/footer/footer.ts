import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'footer[app-footer]',
  imports: [],
  templateUrl: './footer.html'
})
export class Footer {

  appName = environment.appName;
}
