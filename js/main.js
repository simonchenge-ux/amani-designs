function updateWallPrice(select) {
  const meters = parseInt(select.value);
  document.getElementById("wall-price").innerText = meters * 3000;
}

function updateSheerPrice(input) {
  const meters = parseInt(input.value);
  document.getElementById("sheer-price").innerText = meters * 500;
}

