import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent
    // children: [
    //   {path: '', redirectTo: '/departments', pathMatch: 'full'},
    //   {path: 'departments', component: DepartmentsPageComponent, children:[
    //     {path: ':id', component: CncPageComponent}
    //   ]},
    //   {path: 'users', component: UsersPageComponent, children:[
    //     {path: '', component: UsersListComponent},
    //     {path: 'log', component: UsersLogComponent},
    //     {path: ':id', component: UserFormComponent}
    //   ]}
    // ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
