import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


const endpoint = `${environment.url + environment.api}/cufapi100`;

var header = new HttpHeaders().set('Authorization', "Basic " + btoa(environment.auth))

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {}

  public getAll(filtros:any): Observable<any> {
    return this.httpClient.get<any>(endpoint,{headers:header, params:filtros});
  }
}
