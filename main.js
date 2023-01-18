let shop = document.getElementById("shop");

const shopItemData = [
  {
    id: "opdkfj45",
    name: "casual snikers",
    price: "#15,000",
    Quantity: "0",
    Description: "",
    img: "images/image1.jpg",
  },
  {
    id: "efism123",
    name: "wedding bags",
    price: "#12,000",
    Quantity: "4",
    img: "images/image2.jpg",
  },
  {
    id: "cvkfnfkab23",
    name: "office wears",
    price: "#15,000",
    Quantity: "5",
    img: "images/image3.jpg",
  },
  {
    id: "sefcbs75",
    name: "casual snikers",
    price: "#15,000",
    Quantity: "6",
    img: "images/image4.jpg",
  },
];

// ES6 arrow function//
const generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((list) => {
      // object destructuring
      const { id, name, description, img, price, quantity } = list;
      return `
    <div id=product-id-${id}  class="item">
      <img width="215" src=${img} />
      <div class="details">
        <h3>${name}</h3>
        <div class="price-quantity">
          <h2>${price}</h2>
          <div class="button">
            <i  onclick ="decrement(${id})"   class="fa-solid fa-minus"></i>
            <div id=${id} class="quantity">0</div>
            <i  onclick= "increment(${id})" class="fa-sharp fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  `;
    })
    .join(""));
};

generateShop();

const Basket = [];

const increment = (id) => {
  console.log(id); 
  // let selectedItem = id;

  // console.log(selectedItem.id);

  const search = Basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    Basket.push({
      // id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  // console.log(selectedItem.id);
  // // update(selectedItem);
};

increment();
// const decrement = (id) => {
//  console.log(selectedItem);
//   const selectedItem = id;
//   // search for item if it exist in the basket !!!!!!!!!!!
//   const search = Basket.find((x) => x.id === selectedItem.id);
//   if (search === undefined) {
//     //console.log(id);// push all items to the basket
//     Basket.push({
//       id: selectedItem.id,
//       item: 1,
//     });
//   } else {
//     search.item -= 1;
//     // console.log(Basket);
//     update(selectedItem);
//   }
// };

// const update = (id) => {
//   // console.log(search.item);
//   const search = Basket.find((x) => {
//     x.id === id;
//     console.log(search);
//   });
//   //   document.getElementById(id).innerHTML = selectedItem;
// };
// console.log(selectedItem);
