import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent}  from './components/player/player.component';



 export const APP_ROUTES = [


    {path:'home', component:HomeComponent, pathMatch:'full'},
    {path:'about', component:AboutComponent, pathMatch:'full'},
    {path:'player/:id', component:PlayerComponent},
    {path:'**', pathMatch:'full' , redirectTo:'home'}



];

export const ROUTES =  RouterModule.forRoot(APP_ROUTES,{useHash:true})