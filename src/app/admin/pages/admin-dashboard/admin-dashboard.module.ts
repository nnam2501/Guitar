import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminProductComponent } from '../admin-product/admin-product.component';
import { AddDialogComponent } from '../../components/add-dialog/add-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProductComponent,
    AddDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NbLayoutModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbSidebarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NbDialogModule.forRoot(),
    NbCardModule,
    NbInputModule,
  ],
  providers: [NbSidebarService],
})
export class AdminDashboardModule {}
