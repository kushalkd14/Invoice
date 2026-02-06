import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'full',
        pathMatch: 'full'
    },
    {
        path: 'full',
        loadComponent: () => import('./Layout/full/full').then(m => m.Full),
        children: [
            {
                path: '',
                redirectTo: 'auth',
                pathMatch: 'full'
            },
            {
                path: 'auth',
                children: [
                    {
                        path: '',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    {
                        path: 'login',
                        loadComponent: () => import('./authentication/login/login').then(m => m.Login)
                    },
                ]
            },
            {
                path: 'pages',
                children: [
                    {
                        path: '',
                        redirectTo: 'dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
                    },
                    {
                        path: 'masters',
                        children: [
                            {
                                path: 'party',
                                loadComponent: () => import('./pages/masters/party-master/party-master').then(m => m.PartyMaster)
                            },
                            {
                                path: 'add_party',
                                loadComponent: () => import('./pages/masters/party-master/add-party/add-party').then(m => m.AddParty)
                            }
                        ]
                    }


                ]
            }
        ]
    }
];
