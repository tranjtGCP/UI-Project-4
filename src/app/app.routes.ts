import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';

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
        path: "**",
        component: TitleComponent
    }
];
