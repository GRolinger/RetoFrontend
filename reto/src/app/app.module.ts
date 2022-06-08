import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { FacturacionComponent } from './components/facturacion/form/facturacion.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http'
import { FacturacionIndexComponent } from './components/facturacion/index/facturacionIndex.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturacionComponent,
    FacturacionIndexComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
