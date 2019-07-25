import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './pipes/search.ts';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../enviroments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'



//Componentes
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'conversation/:id', component: ConversationComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  RouterModule.forRoot(appRoutes),
                  AngularFireModule.initializeApp(environment.firebase),
                  AngularFirestoreModule,
                  AngularFireAuthModule,
                  AngularFireStorageModule,
                  AngularFireDatabaseModule  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomeComponent, ConversationComponent, ProfileComponent, MenuComponent, SearchPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
