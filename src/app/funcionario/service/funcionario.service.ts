import {Injectable} from '@angular/core';
import {Funcionario} from '../model/funcionario';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FuncionarioService {
  api: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  /**
   * @returns Lista de Funcionarios retornados pela API
   */
  findFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.api}`);
  }

  /**
   * @param id  Id do Funcionario a ser pesquisado
   * @returns Observable<Funcionario> após realizar o processo
   */
  findFuncionarioById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.api}/findById?id=${id}`);
  }

  /**
   * @param funcionario  Funcionario a ser salvo
   * @returns Observable<boolean> após realizar o processo
   */
  saveFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.api}/save`, funcionario);
  }

  /**
   * @param id  Id do Funcionario a ser deletado
   * @returns Observable<void> após realizar o processo
   */
  deleteFuncionario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }
}
