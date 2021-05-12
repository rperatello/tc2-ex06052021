import { Component, OnInit } from '@angular/core';
import { PessoaService } from "../pessoa.service";
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm = this.formBuilder.group({
    nome: '',
    idade: null,
    imagem: ''
  })

  constructor(private pessoaService: PessoaService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.pessoaService.addPessoa(this.cadastroForm.value))
    this.cadastroForm = this.formBuilder.group({
      nome: '',
      idade: null,
      imagem: ''
    })
  }
}
