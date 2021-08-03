import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

// On Init es una interfaz para implementar metodos del ciclo de vida del componente
export class FooterComponent implements OnInit {
  constructor() {}

  autor: string = 'Emanuel Campos Jasso';
  ngOnInit(): void {}
}
