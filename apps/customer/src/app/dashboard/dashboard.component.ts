import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'sarahsphotography-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sideBar: any;

  constructor() {}

  ngOnInit(): void {
    this.sideBar = document.getElementById('mobile-nav');
  }
  public sidebarHandler = (check: boolean) => {
    if (check) {
      this.sideBar.style.transform = 'translateX(-0px)';
    } else {
      this.sideBar.style.transform = 'translateX(-500px)';
    }
  };
}
