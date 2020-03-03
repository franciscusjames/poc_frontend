/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { FinalizadosModule } from './finalizados.module';

/* Containers */
import * as finalizadosContainers from './containers';

/* Guards */
import * as finalizadosGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Finalizados - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Finalizados',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: finalizadosContainers.FinalizadosComponent,
    },
    // {
    //     path: 'static',
    //     data: {
    //         title: 'Finalizados Static - SB Admin Angular',
    //         breadcrumbs: [
    //             {
    //                 text: 'Finalizados',
    //                 link: '/finalizados',
    //             },
    //             {
    //                 text: 'Static',
    //                 active: true,
    //             },
    //         ],
    //     } as SBRouteData,
    //     canActivate: [],
    //     component: finalizadosContainers.StaticComponent,
    // },

];

@NgModule({
    imports: [FinalizadosModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class FinalizadosRoutingModule {}
