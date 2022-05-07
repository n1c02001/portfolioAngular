import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent ,
},
  {
    path: 'Inicio',
    component: InicioComponent ,
},
{
  path: 'Sobremi',
  component: SobremiComponent ,
},
{
path: 'Experiencia',
  component: ExperienciaComponent ,
},
{
  path: 'Educacion',
    component: EducacionComponent ,
},
{
    path: 'Proyectos',
      component: ProyectosComponent ,
},
{
  path: 'Lenguajes',
    component: ConocimientosComponent ,
},
{
  path: 'Contacto',
    component: ContactoComponent ,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
