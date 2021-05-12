import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pessoa } from "./models/pessoa"

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private pessoaSource = new BehaviorSubject<Pessoa>({nome: '', idade: 0, imagem: ''});
  pessoa = this.pessoaSource.asObservable()
  constructor() { }
  alteraPessoa(pessoa: Pessoa) {
    this.pessoaSource.next(pessoa);
  }
}
