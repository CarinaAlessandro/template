import { DOMSelectors } from "./Dom";
import { menu, inSockItems, vegetarianOptions } from "./Menu";

const init = function () {
  menu.forEach(
    (item) =>
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "beforeend",
        `<ul class="item-list">
    <li class="item-name item-value">${item.name}Pizza</li>
    <li class="item-price item-value">${item.price}</li>
    <li class="item-vegetarian item-value">${item.vegetarian}Vegetarian</li>
    <li class="item-image">
      <img
        class="item-image"
        src="${item.img}"
        alt="${item.name}" 
      />
    </li>
    <li class="item-in-stock item-value">${item.inStock}</li>
  </ul>`
      ) //tilda makes it object literal (?lolwut)
  );
};
DOMSelectors.vegetarianButton.addEventListener("click", function (e) {
  DOMSelectors.displayContainer.innerHTML = ""; //so when u click button it doesnt repeat the options, but it eliminates the html and adds new html based on the array below
  vegetarianOptions.forEach((item) => {
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "beforeend",
      `<ul class="item-list">
        <li class="item-name item-value">${item.name}Pizza</li>
        <li class="item-price item-value">${item.price}</li>
        <li class="item-vegetarian item-value">${item.vegetarian}Vegetarian</li>
        <li class="item-image">
          <img
            class="item-image"
            src="${item.img}"
            alt="${item.name}" 
          />
        </li>
        <li class="item-in-stock item-value">${item.inStock}</li>
      </ul>`
    );
  });
  DOMSelectors.displayContainer.insertAdjacentHTML(
    "beforeend",
    `<ul class="item-list">
    <li class="item-name item-value">${item.name}Pizza</li>
    <li class="item-price item-value">${item.price}</li>
    <li class="item-vegetarian item-value">${item.vegetarian}Vegetarian</li>
    <li class="item-image">
      <img
        class="item-image"
        src="${item.img}"
        alt="${item.name}" 
      />
    </li>
    <li class="item-in-stock item-value">${item.inStock}</li>
  </ul>`
  );
});
//now for the instock:
DOMSelectors.inStockButton.addEventListener("click", function (e) {
  DOMSelectors.displayContainer.innerHTML = ""; //so when u click button it doesnt repeat the options, but it eliminates the html and adds new html based on the array below
  inStockOptions.forEach((item) => {
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "beforeend",
      `<ul class="item-list">
          <li class="item-name item-value">${item.name}Pizza</li>
          <li class="item-price item-value">${item.price}</li>
          <li class="item-vegetarian item-value">${item.vegetarian}Vegetarian</li>
          <li class="item-image">
            <img
              class="item-image"
              src="${item.img}"
              alt="${item.name}" 
            />
          </li>
          <li class="item-in-stock item-value">${item.inStock}</li>
        </ul>`
    );
  });
  DOMSelectors.displayContainer.insertAdjacentHTML(
    "beforeend",
    `<ul class="item-list">
      <li class="item-name item-value">${item.name}Pizza</li>
      <li class="item-price item-value">${item.price}</li>
      <li class="item-vegetarian item-value">${item.vegetarian}Vegetarian</li>
      <li class="item-image">
        <img
          class="item-image"
          src="${item.img}"
          alt="${item.name}" 
        />
      </li>
      <li class="item-in-stock item-value">${item.inStock}</li>
    </ul>`
  );
});

init();
