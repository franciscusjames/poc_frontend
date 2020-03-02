import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoadingComponent } from './loading.component';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    dialogRef: any;

    constructor(private dialog: MatDialog) {}

    show() {
        this.dialogRef = this.dialog.open(LoadingComponent, {
            panelClass: 'backgroundPanel',
            disableClose: true,
        });
    }

    hide() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }
}
