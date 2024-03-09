import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CongresosService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('https://localhost:44358/Cargar');
  }
}
