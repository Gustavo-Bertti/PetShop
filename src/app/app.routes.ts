import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path: 'home',
        component: HeaderComponent, 
        children: [
          {
            path: '', 
            component: HomeComponent 
          }
        ]
      }
];
