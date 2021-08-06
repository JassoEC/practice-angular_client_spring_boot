import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './client';
import { CLIENTS } from './clients.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * El decorador inyetable es propio de las clases service
 *  pues como tal se pueden inyectar mediante constructor
 * (Inyeccion de dependencias)
 */

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private urlEndPoint: string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, {
      headers: this.httpHeaders,
    });
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlEndPoint}/${client.id}`, client, {
      headers: this.httpHeaders,
    });
  }

  delete(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
