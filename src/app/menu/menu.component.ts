import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from "../models/pessoa"
import { PessoaService } from "../pessoa.service"
import { StateService } from "../state.service"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  @Input() pessoa!: Pessoa;
  listaPessoas!: Pessoa[];

  constructor(private pessoaService: PessoaService,
    private state: StateService) { }

  ngOnInit(): void {
    this.getPessoas();

  }
  pessoaSelecionada!: Pessoa;

  @Output() pessoaEvent = new EventEmitter<Pessoa>();

  onSelect(pessoa: Pessoa): void {
    this.pessoaSelecionada = pessoa;
    this.state.alteraPessoa(pessoa);
  }

  getPessoas() : void {
    this.listaPessoas = this.pessoaService.getPessoas();
    }
}
