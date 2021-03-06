import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LoaderService } from '../../../../app/loader/loader.service';
import { DashboardService } from '../../services/dashboard.service';


@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public emailsNaoLidosCount = [];
    public emailsFiltrados = [];

    public displayTela: any;
    public historico: any;

    public naoLidos10dias: any;
    public naoLidos7dias: any;
    public naoLidos5dias: any;
    public naoLidos3dias: any;
    public naoLidos2dias: any;
    public naoLidos1dia: any;

    public viewTag = '';


    constructor(private service: DashboardService, private loader: LoaderService) {}

    async ngOnInit() {
        this.loader.show();
        await this.fillEmailsCount();
        await this.fillEmailsFiltrados();
        await this.getAll();
        this.loader.hide();
    }

    async fillEmailsCount() {
        try {
            this.emailsNaoLidosCount = await this.service.getEmailsNaoLidosCount();
            // console.log('emailsNaoLidosCount: ', this.emailsNaoLidosCount);
        } catch (err) {
            console.log('Erro fillEmailsCount: ', err);
        }
    }

    async fillEmailsFiltrados() {
        try {
            this.emailsFiltrados = await this.service.getEmailsFiltrados();
            // console.log('emailsFiltrados: ', this.emailsFiltrados);
        } catch (err) {
            console.log('Erro fillEmailsFiltrados: ', err);
        }
    }

    async getAll() {
        try {
            await this.getNaoLidos();
        } catch (err) {
            console.log('Erro getAllEmailsNaoLidos: ', err);
        }
    }

    async getNaoLidos() {
        try {
            this.naoLidos10dias = await this.service.getEmailsNaoLidos10dias();
            this.naoLidos7dias = await this.service.getEmailsNaoLidos7dias();
            this.naoLidos5dias = await this.service.getEmailsNaoLidos5dias();
            this.naoLidos3dias = await this.service.getEmailsNaoLidos3dias();
            this.naoLidos2dias = await this.service.getEmailsNaoLidos2dias();
            this.naoLidos1dia = await this.service.getEmailsNaoLidos1dia();
        } catch (err) {
            console.log('Erro getAllEmailsNaoLidos: ', err);
        }
    }

    async show10dias() {
        // console.log('10 dias OK');
        this.displayTela = this.naoLidos10dias;
        this.viewTag = 'Emails atrasados a mais de 10 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos10dias);
    }

    async show7dias() {
        // console.log('7 dias OK');
        this.displayTela = this.naoLidos7dias;
        this.viewTag = 'Emails atrasados a mais de 7 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos7dias);
    }

    async show5dias() {
        // console.log('5 dias OK');
        this.displayTela = this.naoLidos5dias;
        this.viewTag = 'Emails atrasados a mais de 5 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos5dias);
    }

    async show3dias() {
        // console.log('3 dias OK');
        this.displayTela = this.naoLidos3dias;
        this.viewTag = 'Emails atrasados a mais de 3 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos3dias);
    }

    async show2dias() {
        // console.log('2 dias OK');
        this.displayTela = this.naoLidos2dias;
        this.viewTag = 'Emails atrasados a mais de 2 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos2dias);
    }

    async show1dia() {
        // console.log('24hs OK');
        this.displayTela = this.naoLidos1dia;
        this.viewTag = 'Emails atrasados a mais de 24 horas:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos1dia);
    }

    async getHistorico(assunto: any) {
        // console.log('getHistorico OK');
        this.historico = [];
        this.historico = await this.service.postHistoricoEmail(assunto);
        // console.log('historico: ', this.historico);
        await this.formatData(this.historico);
    }

    async formatData(param: any) {
        param.map((email: { dataChegadaOuEnvio: { toString: () => string } }) => {
            email.dataChegadaOuEnvio = email.dataChegadaOuEnvio
                .toString()
                .replace('T', '  ')
                .replace('.000Z', '');
        });
    }

    async setLido(assunto: string) {
        // alert(`setLido, assunto: ${assunto}`);
        if (confirm(`Responder este email?`) === true) {
            try {
                await this.service.putSetEmailLido(assunto);
            } catch (err) {
                console.log('Erro setLido: ', err);
            }
            location.reload(true);
        }
    }

    async finalizarEmail(assunto: string) {
        if (confirm(`Deseja finalizar email "${assunto}"?`) === true) {
            try {
                await this.service.putFinalizarEmail(assunto);
                alert(`Email "${assunto}" finalizado!`);
            } catch (err) {
                console.log('Erro finalizarEmail: ', err);
            }
            location.reload(true);
        }
    }

}
