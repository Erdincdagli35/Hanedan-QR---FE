import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BeachMenu } from '../model/beach-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isLoading = false;
  hasError = false;

  //private baseURL = 'https://hanedan-be.up.railway.app/api/menu/list';
  private baseURL = 'http://localhost:8080/api/menu/list';

  constructor(private httpClient: HttpClient) { }

  getBeachMenuList(lang: string): Observable<BeachMenu[]> {
    const url = `${this.baseURL}?lang=${lang}`;
    return this.httpClient.get<BeachMenu[]>(url);
  }
}