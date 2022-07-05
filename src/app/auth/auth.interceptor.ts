import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private toastrService: NbToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({
    //     setHeaders: {
    //       'content-type': 'application/json',
    //     },
    //   });
    // }

    // request = request.clone({
    //   headers: request.headers.set('Accept', 'application/json'),
    // });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          this.toastrService.warning(`Warning`, `Not connecting to server`, {
            limit: 3,
            position: NbGlobalLogicalPosition.BOTTOM_END,
          });
        }
        if (error.status === 500) {
          this.toastrService.danger(`Warning`, `Email or password incorrect`, {
            limit: 3,
            position: NbGlobalLogicalPosition.BOTTOM_END,
          });
        }
        if (error.status === 401) {
          this.toastrService.danger(`Warning`, `unauthorization`, {
            limit: 3,
            position: NbGlobalLogicalPosition.BOTTOM_END,
          });
          console.log('unauthorization');
        }
        return throwError(error);
      })
    );
  }
}
