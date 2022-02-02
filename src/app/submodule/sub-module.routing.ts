import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { TestComponent } from './test/test.component';

const Routes: Routes = [
  { path: 'test', component: TestComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(Routes)
  ],
  exports: [
    RouterModule
  ]
})

export class SubRoutingModule { }