import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
  }
}
