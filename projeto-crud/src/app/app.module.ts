import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoModule } from './aluno/aluno.module';
import { AlunoService } from './aluno/services/aluno.service';
import { HomeComponent } from './home/home.component';
import { CursoModule } from './curso/curso.module';
import { CursoService } from './curso/services/curso.service';
import { MatriculaModule } from './matricula/matricula.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoModule,
    CursoModule,
    MatriculaModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [
    AlunoService,
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
