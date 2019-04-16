import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './guard/authguard.guard';



const routes: Routes = [
    {
        path: '',
        component: BlankComponent,
        children: [
            {
                path: '',
                redirectTo: 'auth',
                pathMatch: 'full'
            },
            {
                path: 'auth',
                loadChildren: './pages/auth/auth.module#AuthModule'
            }
        ]
    },
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dragons',
                pathMatch: 'full'
            },
            {
                path: 'dragons',
                loadChildren: './pages/dragons/dragons.module#DragonsModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
