import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  /**
   * Es posible primero declarar la propiedad y en el cuerpo de la funcuin
   * asignar el valor como tradicionalment se hace
   * sin embargo resulta en codigo mas extenso a diferncia de los que se muestra en seguida
   */
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    /**
     * Los observables funcionan de forma equivalente a los "effects" de React
     *
     * La funcion getClients retrona un stream, un observable, a ese resultado debe estar
     * suscrito la propiedad de la clase para que se actualize con cualquier cambio
     */

    this.clientService
      .getClients()
      .subscribe((result) => (this.clients = result));
  }

  delete(client: Client): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    Swal.fire({
      title: 'Elimnar cliente',
      text: '¿Estas seguro de eliminar este cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, elimanar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true,
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.clientService.delete(client.id).subscribe((response) => {
          console.log(response);

          this.clients = this.clients.filter(
            (clientItem) => clientItem !== client
          );
          swalWithBootstrapButtons.fire(
            'Borrado!',
            `El cliente ${client.name} se fue, adios!`,
            'success'
          );
        });
      }
    });
  }
}
