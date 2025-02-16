import { Routes } from "@angular/router";
import { ComicUserComponent } from "./components/comic-user/comic-user.component";
import { DashboardComponent } from "./dashboard.component";
import { ComicAllComponent } from "./components/comic-all/comic-all.component";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: ComicAllComponent,
            },
            {
                path: 'favorite',
                component: ComicUserComponent,
            }
        ]
    },
    { path: '', redirectTo: '/comic', pathMatch: 'full' },
    { path: '**', redirectTo: '/comic' }
];