import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Factura } from './factura';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  private apiUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public getFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(`${this.apiUrl}/facturas`);
  }

  public getFactura(id: any): Observable<Factura> {
    return this.http.get<Factura>(`${this.apiUrl}/facturas/${id}`);
  }

  public getTipoSPagos(): Observable<Factura[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tipo_pago`);
  }

  public getEstados(): Observable<Factura[]> {
    return this.http.get<any[]>(`${this.apiUrl}/estados`);
  }

  public setFacturas(factura: Factura){
    return this.http.post(`${this.apiUrl}/facturas`, factura);
  }

  public editarFactura(factura: Factura, id: any){
    return this.http.put(`${this.apiUrl}/facturas/${id}`, factura);
  }
}
