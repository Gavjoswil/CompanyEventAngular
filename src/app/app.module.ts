import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule, 
  MatCardModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { AddeventComponent } from './components/events/addevent/addevent.component';
import { EditeventComponent } from './components/events/editevent/editevent.component';
import { DeleteeventComponent } from './components/events/deleteevent/deleteevent.component';
import { EventdetailsComponent } from './components/events/eventdetails/eventdetails.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { EventsService } from './services/events.service';

const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  { 
    path: 'events', children: [
      { path: '', component: EventsComponent },
      { path: 'add', component: AddeventComponent},
      { path: 'edit', component: EditeventComponent},
      { path: 'delete', component: DeleteeventComponent},
      { path: 'details', component: EventdetailsComponent},
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    HomeComponent,
    EventsComponent,
    AddeventComponent,
    EditeventComponent,
    DeleteeventComponent,
    EventdetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatCardModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
