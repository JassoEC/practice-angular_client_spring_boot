import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public client: Client = new Client();
  title: string = 'Nuevo cliente';
  constructor() {}

  ngOnInit(): void {}

  public create(): void {
    console.log('clicked');
    console.log(this.client);
  }
}
