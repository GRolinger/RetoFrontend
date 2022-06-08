export class Metadato {
  id: any;
  nombre_producto: any;
  cantidad: any;
  valor: any;
}

export class Factura {
  id: any;
  cliente: any;
  fecha: any;
  estado: any;
  tipo_pago: any;
  cantidad: any;
  valor: any;
  metadado: Array<Metadato> = [];
}
