import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DragonsRoutingModule } from './dragons-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { DragonsService } from './dragons.service'
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination'
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [ContainerComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(DragonsRoutingModule),
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule

  ],
  providers: [
    DragonsService
  ]
})
export class DragonsModule { }
