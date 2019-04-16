import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DragonsRoutingModule } from './dragons-routing.module';

import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { DragonsService } from './dragons.service'

@NgModule({
  declarations: [ContainerComponent, ListComponent, ItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(DragonsRoutingModule),

  ],
  providers: [
    DragonsService
  ]
})
export class DragonsModule { }
