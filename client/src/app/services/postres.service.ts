import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postre } from '../component/models/Postres';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostresService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPostres(){
    return this.http.get(`${this.API_URL}/postres`);
  }

  getPostre(id: string){
    return this.http.get(`${this.API_URL}/postres/${id}`);
  }

  deletePostre(id: string){
    return this.http.delete(`${this.API_URL}/postres/${id}`);
  }

  savePostre(postre: Postre){
    return this.http.post(`${this.API_URL}/postres`, postre);
  }

  updatePostre(id: string, updatedPostre: Postre): Observable<any> {
    return this.http.put(`${this.API_URL}/postres/${id}`, updatedPostre);
  }
}
