import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DockablesComponent } from './components/dockables/dockables.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: './', component: AppComponent},
  {path: 'dockables-ng', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
