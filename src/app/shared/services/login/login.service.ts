import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { loginUrl } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  //get token when login success
  getToken(data: any) {
    return this.httpClient.post(loginUrl, data).pipe(map((token) => token));
  }
}
