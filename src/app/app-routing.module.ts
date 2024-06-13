import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { RequestComponent } from './components/user components/request/request.component';
import { DisplayPrintsComponent } from './components/user components/display-prints/display-prints.component';
import { AdminDashboardComponent } from './components/admin/admin components/admin-dashboard/admin-dashboard.component';
import { UserSettingsComponent } from './components/admin/admin components/user-settings/user-settings.component';
import { RegisterUserComponent } from './components/admin/admin components/register-user/register-user.component';
import { StudentsComponent } from './components/admin/admin components/students/students.component';
import { RequestApprovalComponent } from './components/admin/admin components/request-approval/request-approval.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: 'user-settings', component: UserSettingsComponent },
    { path: 'register-user', component: RegisterUserComponent },
    { path: 'request-approval', component: RequestApprovalComponent },
    { path: 'students', component: StudentsComponent },] 
  },
  { path: 'request', component: RequestComponent },
  { path: 'display-prints', component: DisplayPrintsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
