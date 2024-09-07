import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WorkspaceComponent } from './components/inside/workspace/workspace.component';
import { BoardComponent } from './components/inside/board/board.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        title: "Login Page"
    },
    {
        path: "workspace",
        component: WorkspaceComponent,
        title: "workspace Page",
    },
    {
        path: "workspace/:id",
        component: BoardComponent,
        title: "workspace/board Page"
    },
    {
        path: "**",
        redirectTo: "/",
    },
];
