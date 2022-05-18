import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DemoMaterialModule } from './modules';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DemoMaterialModule,
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DemoMaterialModule,
    ]
})
export class SharedModule { }
