import { TaskListComponent } from "./main-page/task-list/task-list.component";
import { KanbanComponent } from "./main-page/kanban/kanban.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/task-list", pathMatch: "full" },
  { path: "task-list", component: TaskListComponent },
  { path: "kanban", component: KanbanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
