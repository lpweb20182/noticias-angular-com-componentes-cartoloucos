import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { BarraDeNavegacaoComponent } from './barra-de-navegacao/barra-de-navegacao.component';
import { LeitorDeNoticiaComponent } from './leitor-de-noticia/leitor-de-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    BarraDeNavegacaoComponent,
    LeitorDeNoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
