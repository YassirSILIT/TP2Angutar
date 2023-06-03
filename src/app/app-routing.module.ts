import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './elements/pages/home/home.component';
import { UsersComponent } from './elements/pages/users/users.component';
import { HeaderComponent } from './elements/header/header.component';


const routes: Routes = [
  {path: "header", component:HeaderComponent},
  {path: "home", component: HomeComponent },
  {path: "users", component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
