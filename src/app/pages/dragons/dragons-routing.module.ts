import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';


export const DragonsRoutingModule: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: '',
                component: ListComponent,
                pathMatch: 'full'
            }
        ]
    }
];
