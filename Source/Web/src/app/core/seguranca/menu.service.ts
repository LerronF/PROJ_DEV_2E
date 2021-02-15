import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { environment } from '../../../environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class MenuService {

    constructor(private http: HttpClient, private auth:AutenticacaoService) { }
    
    public getPermissoes(cd_usr:string): Observable<any> {
        return this.http.get(environment.baseUrl + "/api/v1/usuario/obter-permissoes-menu/" + cd_usr);
    }
}