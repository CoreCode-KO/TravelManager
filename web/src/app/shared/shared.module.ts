import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from './modules';
import { BrowserModule } from '@angular/platform-browser';


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
