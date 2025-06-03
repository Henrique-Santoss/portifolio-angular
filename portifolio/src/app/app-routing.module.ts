import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}, // Redireciona para a página inicial
  { path: 'home', component: HomeComponent}, // Página Inicial
  { path: 'about', component: AboutComponent}, // Página Sobre
  { path: 'projects', component: ProjectsComponent}, // Página dos Projetos
  { path: 'resume', component: ResumeComponent}, // Página Currículo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
