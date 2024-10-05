import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Matricula } from '../../shared/models/matricula.model';
import { MatriculaService } from '../services/matricula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../aluno/services/aluno.service';
import { CursoService } from '../../curso/services/curso.service';
import { Aluno } from '../../shared/models/aluno.model';
import { Curso } from '../../shared/models/curso.model';

@Component({
  selector: 'app-inserir-editar-matricula',
  templateUrl: './inserir-editar-matricula.component.html',
  styleUrl: './inserir-editar-matricula.component.css'
})
export class InserirEditarMatriculaComponent implements OnInit{
  @ViewChild('formMatricula') formMatricula! : NgForm;
  novaMatricula: boolean = true;
  matricula: Matricula = new Matricula();
  id!: string;
  loading!: boolean;

  alunos: Aluno[] = [];
  cursos: Curso[] = [];

  constructor(private matriculaService: MatriculaService, private alunoService: AlunoService, private cursoService: CursoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.matricula = new Matricula();
    this.loading = false;
    this.id = this.route.snapshot.params['id'];
    this.novaMatricula = !this.id;
    this.alunos = this.alunoService.listarTodos();
    this.cursos = this.cursoService.listarTodos();
  }


  inserir(): void {
    if(this.formMatricula.form.valid){
      this.matriculaService.inserir(this.matricula);
      this.router.navigate(['/matriculas'])
    }
  }

  // salvar(): void {
  //   this.loading = true;
  //   if(this.formMatricula.form.valid){
  //     if(this.novaMatricula){
  //       this.matriculaService.inserir(this.matricula).subscribe(
  //         matricula => {
  //           this.loading = false;
  //           this.router.navigate(["/matriculas"]);
  //         });
  //     }
  //   }
  //   this.loading = false;
  // }
}
