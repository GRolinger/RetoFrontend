import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Componentes
import { FacturacionComponent } from './components/facturacion/form/facturacion.component';
import { FacturacionIndexComponent } from './components/facturacion/index/facturacionIndex.component';



//Definir las rutas
const appRoutes: Routes = [
    {path: '', component: FacturacionIndexComponent},
    {path: 'facturacion', component: FacturacionIndexComponent},
    {path: 'facturacion/crear', component: FacturacionComponent},
    {path: 'facturacion/editar/:id', component: FacturacionComponent},
];

//Exporta configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
