import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Matricula } from '../../shared/models/matricula.model';


const LS_CHAVE = 'matriculas'
//inserção dos métodos de acesso à API REST
@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  //Descomentar quando subir o backend
  // BASE_URL = "http://localhost:8080/matriculas"

  //   httpOptions = {
  //     observe: "response" as "response",
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })



  //Descomentar quando subir o backend
  //constructor(private httpClient: HttpClient) { }


    constructor(){}
  listarTodos(): Matricula[]{
    const matriculas = localStorage[LS_CHAVE];
    return matriculas ? JSON.parse(matriculas): [];
  }

  inserir(matricula: Matricula): void{
    const matriculas = this.listarTodos();
    matricula.id = new Date().getTime().toString();
    matriculas.push(matricula);
    localStorage[LS_CHAVE] = JSON.stringify(matriculas);
  }

  buscaPorId(id: string): Matricula | undefined{
    const matriculas = this.listarTodos();
    return matriculas.find(matricula => matricula.id = id);
  }

  atualizar(matricula: Matricula): void{
    const matriculas = this.listarTodos();
    matriculas.forEach((obj, index, objs) => {
      if(matricula.id===obj.id){
        objs[index] = matricula;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(matriculas);
  }

  remover(id: string): void{
    let matriculas = this.listarTodos();
    matriculas = matriculas.filter(matricula => matricula.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(matriculas);
  }




}

  
// À PARTIR DAQUI IMPLEMENTA COM BASE NO BACKEND.


//   listarTodos(): Observable<Matricula[] | null> {
//     return this.httpClient.get<Matricula[]>(this.BASE_URL,this.httpOptions).pipe(
//       map((resp: HttpResponse<Matricula[]>) => {
//         if(resp.status != 200){
//           return [];
//         }
//         else {
//           return resp.body;
//         }
//       }), catchError((e, c) => {
//         if(e.status==404){
//           return of([]);
//         }
//         else{
//           return throwError(()=> e);
//         }
//       })
//     );
//   }

//   buscarPorId(id: string): Observable<Matricula | null>{
//     return this.httpClient.get<Matricula>(this.BASE_URL + "/" + id, this.httpOptions).pipe(
//       map((resp: HttpResponse<Matricula>) => {
//         if(resp.status != 200){
//           return null;
//         }
//         else {
//           return resp.body;
//         }
//       }), catchError((e, c) => {
//         if(e.status==404){
//           return of(null);
//         }
//         else{
//           return throwError(()=> e);
//         }
//       })
//     );
//   }

//   inserir(matricula: Matricula): Observable<Matricula | null>{
//     return this.httpClient.post<Matricula>(this.BASE_URL, JSON.stringify(matricula), this.httpOptions).pipe(
      
//       map((resp: HttpResponse<Matricula>) => {
//         if(resp.status != 201){
//           return null;
//         }
//         else {
//           return resp.body;
//         }
//       }), catchError((e, c) => {
//           return throwError(()=> e);
//       })
//     );
//   }

//   alterar(matricula: Matricula): Observable<Matricula | null>{
//     return this.httpClient.put<Matricula>(this.BASE_URL + '/' + matricula.id, JSON.stringify(matricula), this.httpOptions).pipe(
//       map((resp: HttpResponse<Matricula>) => {
//         if(resp.status != 200){
//           return null;
//         }
//         else {
//           return resp.body;
//         }
//       }), catchError((e, c) => {

//           return throwError(()=> e);
//       })
//     );
//   }

//   remover(id: string): Observable<Matricula | null>{
//     return this.httpClient.delete<Matricula>(this.BASE_URL + '/' + id, this.httpOptions).pipe(
//       map((resp: HttpResponse<Matricula>) => {
//         if(resp.status != 200){
//           return null;
//         }
//         else {
//           return resp.body;
//         }
//       }), catchError((e, c) => {
//           return throwError(()=> e);
//       })
//     );
//   }
// }
