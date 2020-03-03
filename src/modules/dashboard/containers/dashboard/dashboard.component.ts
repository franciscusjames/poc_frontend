import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Email } from '@modules/dashboard/models/Email';
import { never } from 'rxjs';

import { MatSpinnerOverlayComponent } from '../../../../app/mat-spinner-overlay/mat-spinner-overlay.component';
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
    public tela1: any;
    public tela2: any;
    public tela3: any;
    public tela5: any;
    public tela7: any;
    public tela10: any;
    public hist1 = [] as any;
    public hist2 = [] as any;
    public hist3 = [] as any;
    public hist5 = [] as any;
    public hist7 = [] as any;
    public hist10 = [] as any;
    public historico = [];
    // public historico = [this.hist1, this.hist2, this.hist3, this.hist5, this.hist7, this.hist10];
    public IsWait = false;

    constructor(private service: DashboardService) {}

    async ngOnInit() {
        this.IsWait = true;
        await this.fillEmailsFiltrados();
        await this.fillEmailsCount();
        await this.show1dia();
        await this.show2dias();
        await this.show3dias();
        await this.show5dias();
        await this.show7dias();
        await this.show10dias();
        this.IsWait = false;
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
        // this.tela10 = await this.service.getEmailsNaoLidos10dias();
        // await this.getHistorico(this.tela10, 10);
        this.displayTela = await this.service.getEmailsNaoLidos10dias();
        await this.getHistorico(this.displayTela);
    }

    async show7dias() {
        console.log('7 dias OK');
        // this.tela7 = await this.service.getEmailsNaoLidos7dias();
        // await this.getHistorico(this.tela10, 7);
        this.displayTela = await this.service.getEmailsNaoLidos7dias();
        await this.getHistorico(this.displayTela);
    }

    async show5dias() {
        console.log('5 dias OK');
        // this.tela5 = await this.service.getEmailsNaoLidos5dias();
        // await this.getHistorico(this.tela5, 5);
        this.displayTela = await this.service.getEmailsNaoLidos5dias();
        await this.getHistorico(this.displayTela);
    }

    async show3dias() {
        console.log('3 dias OK');
        // this.tela3 = await this.service.getEmailsNaoLidos3dias();
        // await this.getHistorico(this.tela3, 3);
        this.displayTela = await this.service.getEmailsNaoLidos3dias();
        await this.getHistorico(this.displayTela);
    }

    async show2dias() {
        console.log('2 dias OK');
        // this.tela2 = await this.service.getEmailsNaoLidos2dias();
        // await this.getHistorico(this.tela2, 2);
        this.displayTela = await this.service.getEmailsNaoLidos2dias();
        await this.getHistorico(this.displayTela);
    }

    async show1dia() {
        console.log('24hs OK');
        // this.tela1 = await this.service.getEmailsNaoLidos1dia();
        // await this.getHistorico(this.tela1, 1);
        this.displayTela = await this.service.getEmailsNaoLidos1dia();
        await this.getHistorico(this.displayTela);
    }

    // async getHistorico(emails: any, parm: any) {
    async getHistorico(assunto: any) {
        console.log('getHistorico OK');
        // console.log('parm: ', parm);
        // if (parm === 1) {
        //     emails.map(async (email: { assunto: string }) => {
        //         const h1 = await this.service.postHistoricoEmail(email.assunto);
        //         this.hist1.push(h1[0]);
        //         await this.formatData(this.hist1);
        //         console.log('hist1: ', this.hist1);
        //     });
        // }
        // if (parm === 2) {
        //     emails.map(async (email: { assunto: string }) => {
        //         const h2 = await this.service.postHistoricoEmail(email.assunto);
        //         this.hist2.push(h2[0]);
        //         await this.formatData(this.hist2);
        //         console.log('hist2: ', this.hist2);
        //     });
        // }
        // if (parm === 3) {
        //     emails.map(async (email: { assunto: string }) => {
        //         const h3 = await this.service.postHistoricoEmail(email.assunto);
        //         this.hist3.push(h3[0]);
        //         await this.formatData(this.hist3);
        //         console.log('hist3: ', this.hist3);
        //     });
        // }
        // if (parm === 5) {
        //     emails.map(async (email: { assunto: string }) => {
        //         const h5 = await this.service.postHistoricoEmail(email.assunto);
        //         this.hist5.push(h5[0]);
        //         await this.formatData(this.hist5);
        //         console.log('hist5: ', this.hist5);
        //     });
        // }
        // if (parm === 7) {
        //     emails.map(async (email: { assunto: string }) => {
        //         const h7 = await this.service.postHistoricoEmail(email.assunto);
        //         this.hist7.push(h7[0]);
        //         await this.formatData(this.hist7);
        //         console.log('hist7: ', this.hist7);
        //     });
        // }
        // if (parm === 10) {
        //     emails.map(async (email: { assunto: string }) => {
        //         const h10 = await this.service.postHistoricoEmail(email.assunto);
        //         this.hist10.push(h10[0]);
        //         await this.formatData(this.hist10);
        //         console.log('hist10: ', this.hist10);
        //     });
        // }
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
