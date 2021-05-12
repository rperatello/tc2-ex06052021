import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from "../models/pessoa"
import { StateService } from '../state.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private state: StateService) { }

  @Input() pessoa!: Pessoa;

  pessoaSelecionada!: Pessoa;

  ngOnInit(): void {
    this.state.pessoa.subscribe((result: Pessoa) => {
      this.pessoaSelecionada = result;
    });
  }

}
