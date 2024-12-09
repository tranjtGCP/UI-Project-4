import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {
        path: "Title",
        component: TitleComponent
    },
    {
        path: "Home",
        component: HomeComponent
    },
    {
        path: "About",
        component: AboutComponent
    },
    {
        path: "Account",
        component: AccountComponent
    },
    {
        path: "**",
        component: TitleComponent
    }
];
