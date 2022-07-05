import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {
  NbAlertModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbToastrModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbButtonModule,
    // NbToastrModule.forRoot(),
  ],
  providers: [],
})
export class LoginModule {}
