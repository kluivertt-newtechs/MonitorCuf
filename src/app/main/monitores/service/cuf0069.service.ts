import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const endpoint = `${environment.url + environment.api}/cufapi101`;

var header = new HttpHeaders().set(
  'Authorization',
  'Basic ' + btoa(environment.auth)
);

@Injectable({
  providedIn: 'root',
})
export class Cuf0069Service {
  private dadosCUF0069 = 'assets/dadosCUF0069.json';

  constructor(private httpClient: HttpClient) {}

  public getAll(filtros: any): Observable<any> {
    return this.httpClient.get<any>(endpoint, {
      headers: header,
      params: filtros,
    });
  }

  public getAllMonk(): Observable<any> {
    return this.httpClient.get<any>(this.dadosCUF0069);
  }
}
