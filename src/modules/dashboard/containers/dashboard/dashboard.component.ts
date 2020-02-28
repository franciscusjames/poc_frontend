import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private service: DashboardService) {}

    async ngOnInit() {
        await this.fillEmailsFiltrados();
    }

    async fillEmailsFiltrados() {
        try {
            const emailsFiltrados = await this.service.getEmailsFiltrados();
            console.log('emailsFiltrados: ', emailsFiltrados);
        } catch (err) {
            console.log('Error: ', err);
        }
    }
}
