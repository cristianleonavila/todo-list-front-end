import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'aside[app-sidebar]',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html'
})
export class Sidebar {

  appName = environment.appName;

  closeSideBar() {
    document.body.classList.remove('sidebar-open');
    document.body.classList.add('sidebar-collapse');
  }
}
