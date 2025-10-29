function calcularPromo() {
  const precio = parseFloat(document.getElementById("producto").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const promo = document.getElementById("promo").value;

  let totalSinDescuento = precio * cantidad;
  let descuento = 0;

  switch (promo) {
    case "2x50":
      if (cantidad >= 2) {
        let pares = Math.floor(cantidad / 2);
        descuento = (precio / 2) * pares;
      }
      break;

    case "3x2":
      if (cantidad >= 3) {
        let trios = Math.floor(cantidad / 3);
        descuento = precio * trios;
      }
      break;

    case "10desc":
      if (totalSinDescuento > 30000) {
        descuento = totalSinDescuento * 0.1;
      }
      break;
  }

  let totalConDescuento = totalSinDescuento - descuento;

  document.getElementById("resultado").innerHTML = `
    <h3>Resultado</h3>
    <p>Total sin descuento: $${totalSinDescuento.toFixed(2)}</p>
    <p>Descuento aplicado: $${descuento.toFixed(2)}</p>
    <p><strong>Total final: $${totalConDescuento.toFixed(2)}</strong></p>
  `;
}