import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  navLinks = [
    {path: '/dashboard/post', label: 'Create Post'},
    {path: '/dashboard/project', label: 'Project'},
    {path: '/dashboard/report', label: 'Generate Report'}
  ];
  currentUser: User;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.currentUser = sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : '';
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

  ngOnInit() {
  }
}
