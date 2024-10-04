import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = "https://localhost:7240/api"
@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  listarEpisodios(){
    return this.http.get<any>(`${base_url}/episodes`, { headers: this.headers})
  }
}
