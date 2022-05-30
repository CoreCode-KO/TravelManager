import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DemoMaterialModule } from './modules';
import { NgxMaskModule } from 'ngx-mask';
import { DateLocalePipe } from './pipes';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DemoMaterialModule,
        NgxMaskModule.forRoot(),
    ],
    declarations: [
        DateLocalePipe,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DemoMaterialModule,
        NgxMaskModule,
        DateLocalePipe,
    ]
})
export class SharedModule { }
