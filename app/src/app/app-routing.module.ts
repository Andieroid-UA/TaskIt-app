import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TaskListComponent } from "./main-page/task-list/task-list.component";
import { KanbanComponent } from "./main-page/kanban/kanban.component";
import { LoginComponent } from "./overlay/overlay-splash-page/login/login.component";
import { SignUpComponent } from "./overlay/overlay-splash-page/sign-up/sign-up.component";
import { SplashComponent } from "./overlay/overlay-splash-page/splash/splash.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/splash", pathMatch: "full" },
  { path: "task-list", component: TaskListComponent },
  { path: "kanban", component: KanbanComponent },
  { path: "login", component: LoginComponent },
  {path: "sign-up", component: SignUpComponent},
  {path: "splash", component: SplashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
