import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class DashboardService {
    headers: Headers = new Headers();

    constructor(private http: HttpClient) {}

    private createHeader = () => this.headers.set('Access-Control-Allow-Origin', '*');

    public getEmailsFiltrados = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsFiltrados`).toPromise();
    };

    public getEmailsFinalizados = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsFinalizados`).toPromise();
    };

    public getEmailsNaoFinalizados = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsNaoFinalizados`).toPromise();
    };

    public postHistoricoEmail = async (param: string): Promise<any> => {
        // this.headers.set('Access-Control-Allow-Origin', '*');
        return this.http.post(`${environment.API_URL_BACK}/historicoEmail`, { param }).toPromise();
    };

    public getEmailsNaoLidos1dia = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsNaoLidos1dia`).toPromise();
    };

    public getEmailsNaoLidos2dias = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsNaoLidos2dias`).toPromise();
    };

    public getEmailsNaoLidos3dias = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsNaoLidos3dias`).toPromise();
    };

    public getEmailsNaoLidos5dias = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsNaoLidos5dias`).toPromise();
    };

    public getEmailsNaoLidos7dias = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsNaoLidos7dias`).toPromise();
    };

    public getEmailsNaoLidos10dias = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsNaoLidos10dias`).toPromise();
    };

    public putFinalizarEmail = async (param: string): Promise<any> => {
        return this.http.put(`${environment.API_URL_BACK}/finalizarEmail`, { param }).toPromise();
    };

    public getEmailsNaoLidosCount = async (): Promise<any> => {
        return this.http.get(`${environment.API_URL_BACK}/emailsNaoLidosCount`).toPromise();
    };

    public putSetEmailLido = async (id: number): Promise<any> => {
        return this.http.put(`${environment.API_URL_BACK}/setEmailLido`, { id }).toPromise();
    };
}
