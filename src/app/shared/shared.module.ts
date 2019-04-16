import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component'
import { DateFormat } from './pipes/date-format.pipe'
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [InputComponent, HeaderComponent, DateFormat],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [InputComponent, HeaderComponent, DateFormat, NgxSpinnerModule]
})
export class SharedModule { }
