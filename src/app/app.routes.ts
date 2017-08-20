import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'

// Public
import { PublicIndexComponent, RegisterComponent } from './public/root'  


// Secure

const appRoutes: Routes = [
    // public
    { path: '', component: PublicIndexComponent },
    { path: 'register', component: RegisterComponent },
    // TODO: add public login

    // secure 

    // TODO: add secure page, e.g. view repositories
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);