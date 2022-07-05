import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSelector } from 'src/app/core-store/login/login.selector';
import { logoutSuccess } from 'src/app/core-store/login/login.actions';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  // declare menu items
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/admin',
    },
    {
      title: 'Products',
      icon: 'person-outline',
      link: '/admin/products',
    },
  ];

  constructor(private route: Router, private store: Store) {}

  ngOnInit(): void {
    // this.store.select(login).subscribe((data) => {
    //   console.log(data);
    // });
  }

  //handle Logout when click on logout button
  logout() {
    this.store.dispatch(logoutSuccess());
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  backToHomePage() {
    this.route.navigate(['']);
  }
}
