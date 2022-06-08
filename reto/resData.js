module.exports = function () {
  var data = {
    facturas: [
      {
        id: 1,
        cliente: 'Rolinger Guzmán',
        fecha: '2022/06/06',
        estado: 1,
        tipo_pago: 1,
        metadado: [
          {
            id: 1,
            nombre_producto: 'Panel Solar',
            cantidad: 2,
            valor: 1500000
          }
        ]
      }
    ],
    tipo_pago: [
      {
        id: 1,
        nombre: 'Contado'
      },
      {
        id: 2,
        nombre: 'Credito'
      },
    ],
    estados: [
      {
        id: 1,
        nombre: 'Activa'
      },
      {
        id: 2,
        nombre: 'Cancelada'
      }
    ]
  }
  return data;
}
