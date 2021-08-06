import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public client: Client = new Client();
  title: string = 'Nuevo cliente';
  constructor(
    private clienService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.clienService
          .getClient(id)
          .subscribe((response) => (this.client = response));
      }
    });
  }

  create(): void {
    this.clienService.create(this.client).subscribe((resp) => {
      this.router.navigate(['/clients']);
      Swal.fire(
        'Nuevo cliente',
        `El cliente ${resp.name} se ha creado con exito`,
        'success'
      );
    });
  }

  update(): void {
    this.clienService.updateClient(this.client).subscribe((resp) => {
      this.router.navigate(['/clients']);
      Swal.fire(
        'Cliente actualizado',
        `El cliente ${resp.name} se ha actualizado con exito`,
        'success'
      );
    });
  }
}
