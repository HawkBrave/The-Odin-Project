const restart = document.querySelector("#restart");
const container = document.querySelector(".container");
const divs = [];

const createGrid = function (rows, columns) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let div = document.createElement("div");
      div.setAttribute("class", `${i} ${j}`);
      container.appendChild(div);
      divs.push(div);
    }
  }
}

const init = function () {
  const rows = getComputedStyle(container).getPropertyValue("--tile-count-row");
  const columns = getComputedStyle(container).getPropertyValue("--tile-count-col");
  createGrid(rows, columns);
}

window.onload = init();

const trail = function (div) {
  div.style.backgroundColor = "black";
}

const addTrail = function () {
  divs.forEach(div => {
    div.onmouseenter = () => {
      trail(div);
    }
  });
}

const removeTrail = function () {
  divs.forEach(div => {
    div.onmouseenter = () => {}
  });
}

const listen = function () {
  container.onmousedown = () => addTrail();
  container.onmouseup = () => removeTrail();
}
listen();

restart.onclick = () => {
  divs.forEach(div => {
    div.style = "";
  });
}