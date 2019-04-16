import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';


export const DragonsRoutingModule: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: '',
                component: ListComponent,
                pathMatch: 'full'
            },
            {
                path: 'novo',
                component: FormComponent
            },
            {
                path: 'editar/:id',
                component: FormComponent
            }
        ]
    }
];
