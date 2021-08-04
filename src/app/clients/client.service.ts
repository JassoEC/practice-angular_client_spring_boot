import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './client';
import { CLIENTS } from './clients.json';

/**
 * El decorador inyetable es propio de las clases service
 *  pues como tal se pueden inyectar mediante constructor
 * (Inyeccion de dependencias)
 */

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
