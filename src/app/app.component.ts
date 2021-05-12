import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TC2 - Ex 06/05/2021';

  @Input() pessoa!: Pessoa;
  pessoaSelecionada!: Pessoa;

  receiveMessage($event: any) {
    this.pessoaSelecionada = $event
    console.log($event)
  }
}
