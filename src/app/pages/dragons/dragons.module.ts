import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DragonsRoutingModule } from './dragons-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { DragonsService } from './dragons.service'
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [ContainerComponent, ListComponent, ItemComponent, FormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(DragonsRoutingModule),
    ReactiveFormsModule
  ],
  providers: [
    DragonsService
  ]
})
export class DragonsModule { }
