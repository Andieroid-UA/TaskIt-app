import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarNavComponent } from './sidebar/sidebar-nav/sidebar-nav.component';
import { SidebarProfileComponent } from './sidebar/sidebar-profile/sidebar-profile.component';
import { TaskListComponent } from './main-page/task-list/task-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { KanbanComponent } from './main-page/kanban/kanban.component';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayTaskComponent } from './overlay/overlay-task/overlay-task.component';
import { OverlaySignInComponent } from './overlay/overlay-sign-in/overlay-sign-in.component';
import { OverlayLoginComponent } from './overlay/overlay-login/overlay-login.component';
import { OverlaySignupComponent } from './overlay/overlay-signup/overlay-signup.component';
import { DeleteComponent } from './overlay/overlay-task/delete/delete.component';
import { EditComponent } from './overlay/overlay-task/edit/edit.component';
import { CreateComponent } from './overlay/overlay-task/create/create.component';
import { OverlaySlashPageComponent } from './overlay/overlay-slash-page/overlay-slash-page.component';
import { OverlaySplashPageComponent } from './overlay/overlay-splash-page/overlay-splash-page.component';
import { LoginComponent } from './overlay/overlay-splash-page/login/login.component';
import { SignUpComponent } from './overlay/overlay-splash-page/sign-up/sign-up.component';
import { SplashComponent } from './overlay/overlay-splash-page/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarNavComponent,
    SidebarProfileComponent,
    TaskListComponent,
    MainPageComponent,
    KanbanComponent,
    OverlayComponent,
    OverlayTaskComponent,
    OverlaySignInComponent,
    OverlayLoginComponent,
    OverlaySignupComponent,
    DeleteComponent,
    EditComponent,
    CreateComponent,
    OverlaySlashPageComponent,
    OverlaySplashPageComponent,
    LoginComponent,
    SignUpComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
