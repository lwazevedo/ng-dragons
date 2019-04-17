import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component'
import { DateFormat } from './pipes/date-format.pipe';
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [HeaderComponent, DateFormat, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, DateFormat, FooterComponent]
})
export class SharedModule { }
