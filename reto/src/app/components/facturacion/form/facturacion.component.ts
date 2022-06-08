import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura, Metadato } from '../factura';
import { FacturacionService } from '../facturacion.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html'
})

export class FacturacionComponent implements OnInit {

  public factura: Factura = new Factura;
  public metadato: Metadato = new Metadato;
  public tiposPagos: Array<any> = [];
  public estados: Array<any> = [];
  public id: any = null;

  constructor(
      private router: Router,
      public routerParams: ActivatedRoute,
      public _facturacionService: FacturacionService
  ) {
    this.id = this.routerParams.snapshot.paramMap.get('id');
  }

  public getEstado(id: any) {
      return this.estados.find(
          (estado: any) => {
              if(estado.id == id) {
                  return estado.nombre;
              }
          }
      );
  }

  public getTipoPago(id: any) {
      return this.tiposPagos.find(
          (tipoPago: any) => {
              if(tipoPago.id == id) {
                  return tipoPago.nombre;
              }
          }
      );
  }

  public calcularSubTotal(valor1: number, valor2: number) {
    return valor1 * valor2;
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

  ngOnInit(): void {
    this._facturacionService.getTipoSPagos().subscribe(
        (tiposPagos: Array<any>) => {
            this.tiposPagos = tiposPagos;
            this._facturacionService.getEstados().subscribe(
                (estados: Array<any>) => {
                    this.estados = estados;
                    if (this.id != null && this.id) {
                        this._facturacionService.getFactura(this.id).subscribe(
                            (res: Factura) => {
                                this.factura = res;
                            }
                        );
                    }
                }
            );
        }
    );
  }

  public addProducto(metadatos: Array<Metadato>, metadato: Metadato) {
    metadato.id = metadatos.length + 1;
    metadatos.push(metadato);
    this.metadato = new Metadato;
    metadato = this.metadato;
  }

  crear(factura: Factura): void {
      this._facturacionService.getFacturas().subscribe(
          (res: Array<Factura>) => {
              if (this.id != null) {
                  this._facturacionService.editarFactura(factura, this.id).subscribe(
                      (res: any) => {
                          this.router.navigateByUrl('/facturacion');
                      }
                  );
              } else {
                  factura.id = res.length + 1;
                  factura.estado = 1;
                  this._facturacionService.setFacturas(factura).subscribe(
                      (res: any) => {
                          this.router.navigateByUrl('/facturacion');
                      }
                  );
              }
          }
      );
  }

}
