import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DockablesComponent } from './components/dockables/dockables.component';


const routes: Routes = [
  {path: '', component: DockablesComponent},
  {path: './', component: DockablesComponent},
  {path: 'dockables-ng', component: DockablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
