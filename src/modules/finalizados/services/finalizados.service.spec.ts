import { TestBed } from '@angular/core/testing';

import { FinalizadosService } from './finalizados.service';

describe('FinalizadosService', () => {
    let finalizadosService: FinalizadosService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FinalizadosService],
        });
        finalizadosService = TestBed.get(FinalizadosService);
    });

    describe('getFinalizados$', () => {
        it('should return Observable<Finalizados>', () => {
            finalizadosService.getFinalizados$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
