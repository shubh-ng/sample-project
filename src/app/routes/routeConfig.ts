import { Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { CountryComponent } from "../country/country.component";
import { NewsComponent } from "../news/news.component";
import { AboutComponent } from "../about/about.component";

export const route:Routes = [
    // {
    //     path:'', component:DashboardComponent
    // },
    {
        path:'country', component:CountryComponent
    },
    {
        path:'news', component:NewsComponent
    },
    {
        path:'about', component:AboutComponent
    }
]