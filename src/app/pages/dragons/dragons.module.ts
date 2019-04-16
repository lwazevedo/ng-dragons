import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragonsRoutingModule } from './dragons-routing.module';

import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ContainerComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DragonsRoutingModule),

  ]
})
export class DragonsModule { }
