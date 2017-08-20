import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'

const appRoutes: Routes = [
    // public
    // TODO: add public index

    // TODO: add public login

    // TODO: add public register

    // secure 

    // TODO: add secure page, e.g. view repositories
    { },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);