window.onload = () => {
  cardGenerater();
  setInterval(() => {
    cardGenerater();
  }, 2000);
};

const cardGenerater = () => {
  let pintas = ["♦", "♥", "♠", "♣"];
  let randomCard;
  let randomPinta = () => {
    randomCard = pintas[Math.floor(Math.random() * pintas.length)];
  };
  randomPinta();

  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let cardNumber;
  let randomNumber = () => {
    cardNumber = number[Math.floor(Math.random() * number.length)];
  };
  randomNumber();

  const caja2 = document.querySelector(".pinta-top");
  caja2.innerHTML = randomCard;
  const caja3 = document.querySelector(".pinta-down");
  caja3.innerHTML = randomCard;
  const caja1 = document.querySelector(".digito");
  caja1.innerHTML = cardNumber;

  if (randomCard == "♦" || randomCard == "♥") {
    caja2.style.color = "red";
    caja3.style.color = "red";
    caja1.style.color = "red";
  } else {
    caja2.style.color = "black";
    caja3.style.color = "black";
    caja1.style.color = "black";
  }
};
