import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './client';
import { CLIENTS } from './clients.json';
import { HttpClient } from '@angular/common/http';

/**
 * El decorador inyetable es propio de las clases service
 *  pues como tal se pueden inyectar mediante constructor
 * (Inyeccion de dependencias)
 */

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private urlEndPoit: string = 'http://localhost:8080/api/clients';
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    //  return of(CLIENTS);
    return this.http.get<Client[]>(this.urlEndPoit);
  }
}
