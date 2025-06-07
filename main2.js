//  <article> </article>
let cards = document.querySelectorAll("article");
let buttons = [];
// тут 0
let counter_field = document.querySelector(".koshyk");
let counter_number = 0;
let totalPrice_field = document.querySelector(".totalPrice");
let totalPrice_number = 0;

// додаю циклом в масив всі мої кнопки з article
cards.forEach((item) => {
  let button = item.querySelector("button");
  buttons.push(button);
});

buttons.forEach((item, index) => {
  item.addEventListener("click", function () {
    //   збільшую лічильник на сторінці зверху
    counter_number += 1;
    counter_field.innerHTML = counter_number;
    //   отримую ціну без слова "грн" і приводжу до числа
    let price = parseInt(
      cards[index]
        .querySelector("p")
        .innerHTML.replaceAll("грн", "")
        .replaceAll(" ", "")
    );
    totalPrice_number += price;
    totalPrice_field.innerHTML =
      "До сплати: " + totalPrice_number + "грн";
  });
});

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  // форма не перезавантажується
  e.preventDefault();
  let fullname_field = form.querySelector(".fullname");
  let card_number_field = form.querySelector(".card_number");
  let money_field = form.querySelector(".money");
  let money_count = parseInt(money_field.value);

  if (money_count >= totalPrice_number) {
    alert("Дякуємо за покупки!");
  } else {
    alert("Недостатньо грошей на рахунку (");
  }
  // Стираємо все в полях введення
  fullname_field.value = "";
  card_number_field.value = "";
  money_field.value = "";
  totalPrice_number = 0;
  totalPrice_field.innerHTML =
    "До сплати: " + totalPrice_number + "грн";
});
