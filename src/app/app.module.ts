import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestComponent } from './components/user components/request/request.component';
import { DisplayPrintsComponent } from './components/user components/display-prints/display-prints.component';
import { AdminDashboardComponent } from './components/admin/admin components/admin-dashboard/admin-dashboard.component';
import { RegisterUserComponent } from './components/admin/admin components/register-user/register-user.component';
import { UserSettingsComponent } from './components/admin/admin components/user-settings/user-settings.component';
import { RequestApprovalComponent } from './components/admin/admin components/request-approval/request-approval.component';
import { StudentsComponent } from './components/admin/admin components/students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    RequestComponent,
    DisplayPrintsComponent,
    AdminDashboardComponent,
    RegisterUserComponent,
    UserSettingsComponent,
    RequestApprovalComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTabsModule,
    CarouselModule.forRoot(),
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
