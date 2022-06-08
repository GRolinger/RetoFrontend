import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura, Metadato } from '../factura';
import { FacturacionService } from '../facturacion.service';


@Component({
  selector: 'app-facturacion-index',
  templateUrl: './facturacionIndex.component.html',
  styleUrls: ['./facturacionIndex.component.css']
})
export class FacturacionIndexComponent implements OnInit {

  public facturas: Array<Factura> = [];
  public tiposPagos: Array<any> = [];
  public estados: Array<any> = [];

  constructor(
    private router: Router,
      public _facturacionService: FacturacionService
  ) { }

  ngOnInit(): void {
      this._facturacionService.getTipoSPagos().subscribe(
          (tiposPagos: Array<any>) => {
              this.tiposPagos = tiposPagos;
              this._facturacionService.getEstados().subscribe(
                  (estados: Array<any>) => {
                      this.estados = estados;
                      this._facturacionService.getFacturas().subscribe(
                          (res: Array<Factura>) => {
                              this.facturas = res;
                          }
                      );
                  }
              );
          }
      );
  }

  public calcularTotal(metadatos: Array<Metadato>) {
      let total: number = 0;
      metadatos.forEach(
          (metadato: Metadato) => {
            total = total + (metadato.cantidad * metadato.valor);
          }
      );
      return total;
  }

  public getEstado(id: any) {
      const retorno = this.estados.find(
          (estado: any) => {
              if(estado.id == id) {
                  return estado.nombre;
              }
          }
      );
      return retorno ? retorno.nombre : '';
  }

  public getTipoPago(id: any) {
      const retorno = this.tiposPagos.find(
          (tipoPago: any) => {
              if(tipoPago.id == id) {
                  return tipoPago.nombre;
              }
          }
      );
      return retorno ? retorno.nombre : '';
  }

  public editar(id: any) {
    this.router.navigateByUrl(`facturacion/editar/${id}`)
  }

  public cancelar(factura: Factura) {
    factura.estado = 2;
    this._facturacionService.editarFactura(factura, factura.id).subscribe(
        (res) => {
            this._facturacionService.getFacturas().subscribe(
                (res: Array<Factura>) => {
                    this.facturas = res;
                }
            );
        }
    );
  }

}
