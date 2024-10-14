import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Aluno } from '../../shared/models/aluno.model';

@Component({
  selector: 'app-modal-aluno',
  templateUrl: './modal-aluno.component.html',
  styleUrl: './modal-aluno.component.css'
})
export class ModalAlunoComponent {
  @Input() aluno: Aluno = new Aluno();

  constructor(public activeModal: NgbActiveModal){}
}
