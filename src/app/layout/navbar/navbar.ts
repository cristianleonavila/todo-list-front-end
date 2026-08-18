import { Component, inject } from '@angular/core';
import { SidebarToggle } from './sidebar-toggle/sidebar-toggle';
import { Search } from "./search/search";
import { EndLinks } from './end-links/end-links';

@Component({
  selector: 'nav[app-navbar]',
  imports: [SidebarToggle, Search, EndLinks],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
