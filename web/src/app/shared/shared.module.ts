import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DemoMaterialModule } from './modules';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DemoMaterialModule,
        NgxMaskModule.forRoot(),
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DemoMaterialModule,
        NgxMaskModule,
    ]
})
export class SharedModule { }
