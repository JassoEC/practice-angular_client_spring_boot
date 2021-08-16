import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Client } from './client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

/**
 * El decorador injectable es propio de las clases service
 *  pues como tal se pueden inyectar mediante constructor
 * (Inyeccion de dependencias)
 */

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private urlEndPoint: string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, {
      headers: this.httpHeaders,
    });
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        this.router.navigate(['/clients']);
        Swal.fire('Error', e.error.message, 'error');
        return throwError(e);
      })
    );
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
