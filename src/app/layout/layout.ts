import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Sidebar } from "./sidebar/sidebar";
import { MainContent } from './main-content/main-content';
import { Footer } from "./footer/footer";
import { initialize } from 'admin-lte';

@Component({
  selector: 'app-layout',
  imports: [Navbar, Sidebar, MainContent, Footer],
  templateUrl: './layout.html'
})
export default class Layout implements OnInit, OnDestroy, AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    initialize();
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'layout-fixed');
    this.renderer.addClass(document.body, 'sidebar-expand-lg');
    this.renderer.addClass(document.body, 'bg-body-tertiary');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'layout-fixed');
    this.renderer.removeClass(document.body, 'sidebar-expand-lg');
    this.renderer.removeClass(document.body, 'bg-body-tertiary');
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.removeClass(document.body, 'sidebar-collapse');
  }

  closeSidebar(): void {
    document.body.classList.remove('sidebar-open');
    document.body.classList.add('sidebar-collapse');
  }
}
