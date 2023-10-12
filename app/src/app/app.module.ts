import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarNavComponent } from './sidebar/sidebar-nav/sidebar-nav.component';
import { SidebarProfileComponent } from './sidebar/sidebar-profile/sidebar-profile.component';
import { TaskListComponent } from './main-page/task-list/task-list.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarNavComponent,
    SidebarProfileComponent,
    TaskListComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
