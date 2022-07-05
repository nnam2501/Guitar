import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  NbAuthService,
  NbLoginComponent,
  NB_AUTH_OPTIONS,
} from '@nebular/auth';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { login } from 'src/app/core-store/login/login.actions';
import { loginSelector } from 'src/app/core-store/login/login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent
  extends NbLoginComponent
  implements OnInit, OnDestroy
{
  // loginForm!: FormGroup;
  token: any;
  private ngUnsubscribe = new Subject<void>();
  // constructor(
  //   private store: Store,
  //   private api: LoginService,
  //   private form: FormBuilder,
  //   private route: Router
  // ) {
  //   this.loginForm = this.form.group({
  //     email: [''],
  //     password: [''],
  //   });
  // }
  constructor(
    private store: Store,
    private route: Router,
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected override options: {},
    cd: ChangeDetectorRef,
    routes: Router
  ) {
    super(service, options, cd, routes);
  }

  ngOnInit(): void {}

  onSubmit(user: any) {
    // use api login to get token from server
    this.store.dispatch(login(user));

    this.store.select(loginSelector).subscribe((res) => {
      localStorage.setItem('token', res.token);
    });

    if (localStorage.getItem('token') !== '') {
      this.route.navigate(['/admin']);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }
}
