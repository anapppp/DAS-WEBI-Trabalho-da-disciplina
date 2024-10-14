import { Component, ViewChild } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';
import { NgForm } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-aluno',
  templateUrl: './inserir-editar-aluno.component.html',
  styleUrl: './inserir-editar-aluno.component.css'
})

export class InserirEditarAlunoComponent {
  @ViewChild('formAluno') formAluno!: NgForm;
  novoAluno: boolean = true;
  aluno: Aluno = new Aluno();
  id!: string;
  loading!: boolean;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aluno = new Aluno();
    this.loading = false;

    this.id = this.route.snapshot.params['id'];
    this.novoAluno = !this.id;

    if (!this.novoAluno) {
      this.alunoService.buscarPorId(+this.id).subscribe(
        aluno => {
          this.aluno = aluno;
        }
      )
    }
  };

  salvar(): void {
    this.loading = true;

    if (this.formAluno.form.valid) {
      if (this.novoAluno) {
        this.alunoService.inserir(this.aluno).subscribe(
          _aluno => {
            this.loading = false;
            this.router.navigate(["/alunos"]);
          }
        )
      } else {
        this.alunoService.atualizar(this.aluno).subscribe(
          _aluno => {
            this.loading = false;
            this.router.navigate(["/alunos"]);
          }
        )
      }
      this.loading = false;
    }
  }
}