import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient) {}

  getThemes(): Observable<any> {
    return this.http.get('http://localhost:3000/api/themes');
  }

  loadThemeById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/themes/${id}`);
  }
}
