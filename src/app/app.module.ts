import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

import { StoreModule } from '@ngrx/store';
import { productsReducer } from './core-store/products/products.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginReducer } from './core-store/login/login.reducer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './client/pages/dashboard/home-page/home-page.component';
import { AdminProductComponent } from './admin/pages/admin-product/admin-product.component';
import {
  NbThemeModule,
  NbLayoutModule,
  NbInputModule,
  NbButtonModule,
  NbAlertModule,
  NbIconModule,
  NbCheckboxModule,
  NbToastrModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthModule, NbAuthService } from '@nebular/auth';

import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminDetailProductComponent } from './admin/pages/admin-detail-product/admin-detail-product.component';
import { EditDialogComponent } from './admin/components/edit-dialog/edit-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './core-store/products/products.effects';
import { LoginEffects } from './core-store/login/login.effects';

@NgModule({
  declarations: [
    AppComponent,
    AdminDetailProductComponent,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productsReducer, login: loginReducer }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbAuthModule.forRoot(),
    NbToastrModule.forRoot(),
    NbIconModule,
    NbEvaIconsModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([ProductEffects, LoginEffects]),
  ],
  providers: [
    NbAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
