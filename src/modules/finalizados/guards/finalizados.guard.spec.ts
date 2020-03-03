import { TestBed } from '@angular/core/testing';

import { FinalizadosGuard } from './finalizados.guard';

describe('Finalizados Guards', () => {
    let finalizadosGuard: FinalizadosGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [FinalizadosGuard],
        });
        finalizadosGuard = TestBed.get(FinalizadosGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            finalizadosGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
