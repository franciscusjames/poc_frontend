import {
    ChangeDetectionStrategy,
    Component,
    ComponentFactoryResolver,
    OnInit,
} from '@angular/core';
import { async } from '@angular/core/testing';
import { Email } from '@modules/dashboard/models/Email';

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

    // public historico10dias: any;
    // public historico7dias: any;
    // public historico5dias: any;
    // public historico3dias: any;
    // public historico2dias: any;
    // public historico1dia: any;

    public viewTag = '';

    constructor(private service: DashboardService) {}

    async ngOnInit() {
        await this.fillEmailsCount();
        await this.fillEmailsFiltrados();
        await this.getAll();
    }

    async fillEmailsFiltrados() {
        try {
            this.emailsFiltrados = await this.service.getEmailsFiltrados();
            // console.log('emailsFiltrados: ', this.emailsFiltrados);
        } catch (err) {
            console.log('Erro fillEmailsFiltrados: ', err);
        }
    }

    async finalizarEmail(assunto: string) {
        if (confirm(`Deseja finalizar email "${assunto}"?`) === true) {
            try {
                const finalizarEmail = await this.service.putFinalizarEmail(assunto);
                alert(`Email "${assunto}" finalizado!`);
                await this.ngOnInit();
            } catch (err) {
                console.log('Erro finalizarEmail: ', err);
            }
            location.reload(true);
            // await this.ngOnInit();
        }
    }

    async fillEmailsCount() {
        try {
            this.emailsNaoLidosCount = await this.service.getEmailsNaoLidosCount();
            // console.log('emailsNaoLidosCount: ', this.emailsNaoLidosCount);
        } catch (err) {
            console.log('Erro fillEmailsCount: ', err);
        }
    }

    async getAll() {
        try {
            await this.getNaoLidos();
            // await this.getHistoricos();
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
            console.log('Erro getNaoLidos: ', err);
        }
    }

    // async getHistoricos() {
    //     try {
    //         this.historico10dias = await this.getHistorico(this.naoLidos10dias);
    //         this.historico7dias = await this.getHistorico(this.naoLidos7dias);
    //         this.historico5dias = await this.getHistorico(this.naoLidos5dias);
    //         this.historico3dias = await this.getHistorico(this.naoLidos3dias);
    //         this.historico2dias = await this.getHistorico(this.naoLidos2dias);
    //         this.historico1dia = await this.getHistorico(this.naoLidos1dia);
    //     } catch (err) {
    //         console.log('Erro getHistoricos: ', err);
    //     }
    // }

    async show10dias() {
        // console.log('10 dias OK');
        this.displayTela = this.naoLidos10dias;
        // this.historico = this.historico10dias;
        this.viewTag = 'Emails atrasados a mais de 10 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos10dias);
    }

    async show7dias() {
        // console.log('7 dias OK');
        this.displayTela = this.naoLidos7dias;
        // this.historico = this.historico7dias;
        this.viewTag = 'Emails atrasados a mais de 7 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos7dias);
    }

    async show5dias() {
        // console.log('5 dias OK');
        this.displayTela = this.naoLidos5dias;
        // this.historico = this.historico5dias;
        this.viewTag = 'Emails atrasados a mais de 5 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos5dias);
    }

    async show3dias() {
        // console.log('3 dias OK');
        this.displayTela = this.naoLidos3dias;
        // this.historico = this.historico3dias;
        this.viewTag = 'Emails atrasados a mais de 3 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos3dias);
    }

    async show2dias() {
        // console.log('2 dias OK');
        this.displayTela = this.naoLidos2dias;
        // this.historico = this.historico2dias;
        this.viewTag = 'Emails atrasados a mais de 2 Dias:';
        await this.formatData(this.displayTela);
        await this.getHistorico(this.naoLidos2dias);
    }

    async show1dia() {
        // console.log('24hs OK');
        this.displayTela = this.naoLidos1dia;
        // this.historico = this.historico1dia;
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
                const setLido = await this.service.putSetEmailLido(assunto);
            } catch (err) {
                console.log('Erro setLido: ', err);
            }
            location.reload(true);
        }
    }
}
