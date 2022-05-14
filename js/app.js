const turnOn = document.getElementById("turnOn");
const turnOf = document.getElementById("turnOf");
const lamp = document.getElementById("lamp");

function isLamQuebrada() {
  return lamp.src.indexOf("quebrada") > -1;
}

const lampOn = () => {
  if (!isLamQuebrada()) {
    lamp.src = "./img/ligada.jpg";
  }
};

const lampOf = () => {
  if (!isLamQuebrada()) {
    lamp.src = "./img/desligada.jpg";
  }
};

const lampQuebrada = () => {
  lamp.src = "./img/quebrada.jpg";
};

turnOn.addEventListener("click", lampOn);
turnOf.addEventListener("click", lampOf);

lamp.addEventListener("mouseenter", lampOn);
lamp.addEventListener("mouseleave", lampOf);
lamp.addEventListener("dblclick", lampQuebrada);
