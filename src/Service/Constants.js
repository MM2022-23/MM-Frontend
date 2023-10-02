// export const STRIPE_KEY =
//   "pk_live_51N0rSfJpcofebbjLOHNexWo5zEsqtf10Uq6PtPaKA9F93Pf9qGCHf6RGgmQl1B5cffa7eNbRAXPMwAurfUp6msUV002vZyE4MK";

// for cloud testing
// export const BASE_URL = "https://mm-pure-backend-production.up.railway.app/api";
// export const BASE_URL = "https://purple-sparrow-tam.cyclic.app/api";

//// for local testing
export const BASE_URL = "http://localhost:5002/api";
// Stripe public key
export const STRIPE_KEY =
  "pk_test_51MTD3pKB0MrKGvtTlB0z9fyWP7KDgzRULe5hvCis4CZIONowrJju1uabTVi3rstU62thFSfyZ7Yf0ItuEjgdJKSj00bXB64jfr";

export const TRACKINGID = "G-0T8X6NHK41";

// For demo purposes only all info abt chefs

export const chefs = [
  {
    id: 1,
    name: "Ramesh Mathur",
    locationOfService: "New Jersey",
    description1: "20+ years of experience in Cooking",
    description2: "Catered for 1000+ ocassions",
    imgSrc:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
    meals: [
      {
        id: 0,
        img: "Palak Paneer.jpg",
        mealName: "Palak Paneer",
        description:
          "Soft paneer (a type of Indian cheese) cubes cooked in a creamy spinach gravy.",
        content: [
          "8oz Palak Paneer ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],

        price: 11.99,
      },

      {
        id: 1,
        img: "Paneer Tikka.jpg",
        mealName: "Paneer Tikka",
        description:
          "Marinated cubes of paneer (a type of Indian cheese) that are simmered in a rich and creamy tomato-based gravy.",
        content: [
          "8oz Paneer Tikka Masala",

          "8oz Masala Rice",

          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },

      {
        id: 2,
        img: "Chana Masala.jpg",
        mealName: "Chana Masala",
        description:
          "Chickpeas cooked in a spicy and tangy tomato-based gravy.",
        content: [
          "8oz Chana Masala ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },

      {
        id: 3,
        img: "Aloo Gobi.jpg",
        mealName: "Bazigar Aloo Gobi",
        description:
          "A dry curry made with potatoes (aloo) and cauliflower (gobi) that are cooked together with a blend of aromatic spices.",
        content: [
          "8oz Aloo Gobi ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      {
        id: 4,
        img: "Baigan Bharta.jpg",
        mealName: "Best Baigan Bharta",
        description:
          "Grilled eggplant minced into curry consisting of authentic herbs and spices.",
        content: [
          "8oz Baigan Bharta ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      {
        id: 5,
        img: "Rajma.jpg",
        mealName: "Royal Rajma Express",
        description:
          "Kidney beans cooked in a spicy and tangy tomato-based gravy along with onions and spices.",
        content: [
          "8oz Rajma ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      /*{
        id: 6,
        img: "MangoDolly.png",
        mealName: "Mango Dolly",
        description:
          "Delightfully creamy vanilla ice cream bar enveloped in a mango coating",
        content: ["Mango dolly"],
        price: 2,
      },
      {
        id: 7,
        img: "ChocoBar.png",
        mealName: "Chocobar",
        description:
          "Savory ice cream bar with a vanilla ice cream center and chocolate exterior",
        content: ["Chocobar"],
        price: 2,
      }, */
    ],
  },
  {
    id: 2,
    name: "Rutvik Tambodia",
    locationOfService: "New Jersey",
    description1: "20+ years of experience in Cooking",
    description2: "Catered for 1000+ ocassions",
    imgSrc:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
     meals: [
      {
        id: 0,
        img: "Palak Paneer.jpg",
        mealName: "Palak Paneer",
        description:
          "Soft paneer (a type of Indian cheese) cubes cooked in a creamy spinach gravy.",
        content: [
          "8oz Palak Paneer ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],

        price: 11.99,
      },

      {
        id: 1,
        img: "Paneer Tikka.jpg",
        mealName: "Paneer Tikka",
        description:
          "Marinated cubes of paneer (a type of Indian cheese) that are simmered in a rich and creamy tomato-based gravy.",
        content: [
          "8oz Paneer Tikka Masala",

          "8oz Masala Rice",

          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },

      {
        id: 2,
        img: "Chana Masala.jpg",
        mealName: "Chana Masala",
        description:
          "Chickpeas cooked in a spicy and tangy tomato-based gravy.",
        content: [
          "8oz Chana Masala ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },

      {
        id: 3,
        img: "Aloo Gobi.jpg",
        mealName: "Bazigar Aloo Gobi",
        description:
          "A dry curry made with potatoes (aloo) and cauliflower (gobi) that are cooked together with a blend of aromatic spices.",
        content: [
          "8oz Aloo Gobi ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      {
        id: 4,
        img: "Baigan Bharta.jpg",
        mealName: "Best Baigan Bharta",
        description:
          "Grilled eggplant minced into curry consisting of authentic herbs and spices.",
        content: [
          "8oz Baigan Bharta ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      {
        id: 5,
        img: "Rajma.jpg",
        mealName: "Royal Rajma Express",
        description:
          "Kidney beans cooked in a spicy and tangy tomato-based gravy along with onions and spices.",
        content: [
          "8oz Rajma ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      /*{
        id: 6,
        img: "MangoDolly.png",
        mealName: "Mango Dolly",
        description:
          "Delightfully creamy vanilla ice cream bar enveloped in a mango coating",
        content: ["Mango dolly"],
        price: 2,
      },
      {
        id: 7,
        img: "ChocoBar.png",
        mealName: "Chocobar",
        description:
          "Savory ice cream bar with a vanilla ice cream center and chocolate exterior",
        content: ["Chocobar"],
        price: 2,
      }, */
    ],
  },
  {
    id: 3,
    name: "Kevin Taang",
    locationOfService: "New Jersey",
    description1: "20+ years of experience in Cooking",
    description2: "Catered for 1000+ ocassions",
    imgSrc:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
     meals: [
      {
        id: 0,
        img: "Palak Paneer.jpg",
        mealName: "Palak Paneer",
        description:
          "Soft paneer (a type of Indian cheese) cubes cooked in a creamy spinach gravy.",
        content: [
          "8oz Palak Paneer ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],

        price: 11.99,
      },

      {
        id: 1,
        img: "Paneer Tikka.jpg",
        mealName: "Paneer Tikka",
        description:
          "Marinated cubes of paneer (a type of Indian cheese) that are simmered in a rich and creamy tomato-based gravy.",
        content: [
          "8oz Paneer Tikka Masala",

          "8oz Masala Rice",

          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },

      {
        id: 2,
        img: "Chana Masala.jpg",
        mealName: "Chana Masala",
        description:
          "Chickpeas cooked in a spicy and tangy tomato-based gravy.",
        content: [
          "8oz Chana Masala ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },

      {
        id: 3,
        img: "Aloo Gobi.jpg",
        mealName: "Bazigar Aloo Gobi",
        description:
          "A dry curry made with potatoes (aloo) and cauliflower (gobi) that are cooked together with a blend of aromatic spices.",
        content: [
          "8oz Aloo Gobi ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      {
        id: 4,
        img: "Baigan Bharta.jpg",
        mealName: "Best Baigan Bharta",
        description:
          "Grilled eggplant minced into curry consisting of authentic herbs and spices.",
        content: [
          "8oz Baigan Bharta ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      {
        id: 5,
        img: "Rajma.jpg",
        mealName: "Royal Rajma Express",
        description:
          "Kidney beans cooked in a spicy and tangy tomato-based gravy along with onions and spices.",
        content: [
          "8oz Rajma ",
          "8oz Masala Rice",
          "Tandoor Roti",
          // "6oz Amul Buttermilk Drink",
        ],
        price: 11.99,
      },
      /*{
        id: 6,
        img: "MangoDolly.png",
        mealName: "Mango Dolly",
        description:
          "Delightfully creamy vanilla ice cream bar enveloped in a mango coating",
        content: ["Mango dolly"],
        price: 2,
      },
      {
        id: 7,
        img: "ChocoBar.png",
        mealName: "Chocobar",
        description:
          "Savory ice cream bar with a vanilla ice cream center and chocolate exterior",
        content: ["Chocobar"],
        price: 2,
      }, */
    ],
  },
];
