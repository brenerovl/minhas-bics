import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ListaBoletosComponent } from './boletos/lista-boletos/lista-boletos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoletosComponent } from './boletos/boletos.component';
import { MatInputModule } from '@angular/material/input';
import { FiltroBoletosComponent } from './boletos/filtro-boletos/filtro-boletos.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ListaBoletosComponent,
    BoletosComponent,
    FiltroBoletosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
