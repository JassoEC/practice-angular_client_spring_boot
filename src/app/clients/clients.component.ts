import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clients: Client[] = [
    {
      id: 1,
      name: 'Emanuel',
      lastName: 'Campos',
      email: 'ecampos@mail.com',
      createdAt: '30-01-1994',
    },
    {
      id: 2,
      name: 'Michelle',
      lastName: 'Pacheco',
      email: 'michelle@mail.com',
      createdAt: '29-05-2000',
    },
  ];
}
