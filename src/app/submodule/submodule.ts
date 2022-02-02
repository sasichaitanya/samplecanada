import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// components
import { TestComponent } from './test/test.component';
// routes
import { SubRoutingModule } from './sub-module.routing';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SubRoutingModule
        // BrowserAnimationsModule
    ],
    declarations: [
        TestComponent
    ],
    providers: [
        
    ],
})
export class SubModule { }
