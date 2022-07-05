import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './auth/login/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./client/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  // {
  //   path: 'product/:id',
  //   loadChildren: () =>
  //     import('./client/pages/dashboard/detail/detail.module').then((m) => m.DetailModule),
  // },
  {
    path: 'login',
    component: NbAuthComponent,
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
    data: { animation: 'isRight' },
  },
  {
    path: 'admin',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./admin/pages/admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
    data: { animation: 'isLeft' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  providers: [LoginGuard],
})
export class AppRoutingModule {}
