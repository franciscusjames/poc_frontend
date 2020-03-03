import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
    public historico = [];

    constructor(private service: DashboardService) {}

    async ngOnInit() {
        await this.fillEmailsFiltrados();
        await this.fillEmailsCount();
    }

    async fillEmailsFiltrados() {
        try {
            this.emailsFiltrados = await this.service.getEmailsFiltrados();
            console.log('emailsFiltrados: ', this.emailsFiltrados);
        } catch (err) {
            console.log('Error: ', err);
        }
    }

    async finalizarEmail(assunto: string) {
        try {
            const finalizarEmail = await this.service.putFinalizarEmail(assunto);
            alert(`Email "${assunto}" finalizado!`);
            await this.ngOnInit();
        } catch (err) {
            console.log('Error: ', err);
        }
    }

    async fillEmailsCount() {
        try {
            this.emailsNaoLidosCount = await this.service.getEmailsNaoLidosCount();
            console.log('emailsNaoLidosCount: ', this.emailsNaoLidosCount);
        } catch (err) {
            console.log('Error: ', err);
        }
    }

    async show10dias() {
        console.log('10 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos10dias();
        await this.getHistorico(this.displayTela);
    }

    async show7dias() {
        console.log('7 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos7dias();
        await this.getHistorico(this.displayTela);
    }

    async show5dias() {
        console.log('5 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos5dias();
        await this.getHistorico(this.displayTela);
    }

    async show3dias() {
        console.log('3 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos3dias();
        await this.getHistorico(this.displayTela);
    }

    async show2dias() {
        console.log('2 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos2dias();
        await this.getHistorico(this.displayTela);
    }

    async show1dia() {
        console.log('24hs OK');
        this.displayTela = await this.service.getEmailsNaoLidos1dia();
        await this.getHistorico(this.displayTela);
    }

    async getHistorico(assunto: any) {
        console.log('getHistorico OK');
        this.historico = [];
        this.historico = await this.service.postHistoricoEmail(assunto);
        console.log('historico: ', this.historico);
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
}
