import { Injectable } from '@angular/core';
import { Pessoa } from "./models/pessoa"
import { PESSOAS } from "./pessoa/listaPessoas"

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  PESSOAS = PESSOAS;

  constructor() { }

  addPessoa(pessoa : Pessoa): void {
    if (pessoa.nome === '') {
      window.alert("O campo nome é obrigatório!")
    } else if (!pessoa.idade || pessoa.idade < 0) {
      window.alert("O campo idade é obrigatório!")
    } else if (PESSOAS.some(p => (p.nome).toLowerCase() === (pessoa.nome).toLowerCase())) {
      window.alert("Nome já cadastrado!")
    } else if (pessoa.imagem === '') {
      pessoa.imagem = 'https://picsum.photos/200/300?random='+ Math.random()
      PESSOAS.push(pessoa)
      window.alert("Pessoa cadastrada com sucesso!")
    } else {
      PESSOAS.push(pessoa)
      window.alert("Pessoa cadastrada com sucesso!")
    }
  }

  getPessoas(): Pessoa[] {
    return PESSOAS;
  }

}
