import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../shared/models/aluno.model';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.css'
})
export class EditarAlunoComponent {
  @ViewChild('formAluno') formAluno!: NgForm;
  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.alunoService.buscarPorId(id);
    if (res !== undefined)
      this.aluno = res;
    else
      throw new Error("Cadastro de aluno não encontrado: id = " + id);
  }

  editar(): void {
    if (this.formAluno.form.valid) {
      this.alunoService.atualizar(this.aluno);
      this.router.navigate(['/alunos'])
    }

  }



}
