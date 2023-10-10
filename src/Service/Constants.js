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
    description1:
      "Started cooking out of necessity 15 years ago, haven't stopped since!",
    description2:
      "15 Years of experience cooking North Indian dishes, catered for 3 events so far, and NJ local for the last 6 years. Thanks for checking out my page!",
    imgSrc: require("../Resources/Chefs/Ramesh Mathur.png"),
    meals: [
      {
        id: 0,
        img: "Palak Paneer.jpg",
        mealName: "Palak Paneer",
        description:
          "Soft paneer (a type of Indian cheese) cubes cooked in a creamy spinach gravy.",
        content: ["8oz Palak Paneer ", "8oz Masala Rice", "Tandoor Roti"],

        price: 11.99,
      },

      {
        id: 1,
        img: "Paneer Tikka.jpg",
        mealName: "Paneer Tikka",
        description:
          "Marinated cubes of paneer (a type of Indian cheese) that are simmered in a rich and creamy tomato-based gravy.",
        content: ["8oz Paneer Tikka Masala", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },

      {
        id: 2,
        img: "Chana Masala.jpg",
        mealName: "Chana Masala",
        description:
          "Chickpeas cooked in a spicy and tangy tomato-based gravy.",
        content: ["8oz Chana Masala ", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },

      {
        id: 3,
        img: "Aloo Gobi.jpg",
        mealName: "Bazigar Aloo Gobi",
        description:
          "A dry curry made with potatoes (aloo) and cauliflower (gobi) that are cooked together with a blend of aromatic spices.",
        content: ["8oz Aloo Gobi ", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },
      {
        id: 4,
        img: "Baigan Bharta.jpg",
        mealName: "Best Baigan Bharta",
        description:
          "Grilled eggplant minced into curry consisting of authentic herbs and spices.",
        content: ["8oz Baigan Bharta ", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },
      {
        id: 5,
        img: "Rajma.jpg",
        mealName: "Royal Rajma Express",
        description:
          "Kidney beans cooked in a spicy and tangy tomato-based gravy along with onions and spices.",
        content: ["8oz Rajma ", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },
    ],
  },
  {
    id: 2,
    name: "Rohini Yadav",
    locationOfService: "New Jersey",
    description1: "Mother of 2 and big time foodie turned chef!",
    description2:
      "Cooking for about 3 years now ever since finishing masters. Originally from Bihar but want to share my cooking with all. Feel free to let me know how you like it, thanks!",
    imgSrc: require("../Resources/Chefs/Rohini Yadav.png"),
    meals: [
      {
        id: 0,
        img: "Rohini Special Pav.png",
        mealName: "Vada Paav",
        description:
          "Vada Pav is a popular Indian street food made of a spicy potato fritter served inside a soft bread roll, often accompanied by flavorful chutneys. It's a delicious and portable snack known for its affordability and widespread availability in India.",
        content: ["8oz Palak Paneer ", "8oz Masala Rice", "Tandoor Roti"],

        price: 4.99,
      },

      {
        id: 1,
        img: "Loaded Cauliflower Manchurian.png",
        mealName: "Gobi Manchurian",
        description:
          "Gobi Manchurian is a popular Indo-Chinese dish consisting of crispy cauliflower florets that are coated in a flavorful batter and deep-fried until golden brown. These fried cauliflower bites are then stir-fried in a savory and tangy Manchurian sauce, creating a delicious and slightly spicy appetizer or side dish.",
        content: ["8oz Paneer Tikka Masala", "8oz Masala Rice", "Tandoor Roti"],
        price: 8.99,
      },

      {
        id: 2,
        img: "Spicy Chili Noodles.png",
        mealName: "Spicy Chili Noodles ",
        description:
          "Spicy Chili Indian Noodles are a fiery and flavorful fusion dish that combines the essence of Indian spices with Chinese-style stir-fried noodles. These noodles feature a bold blend of spices, including chili, and are typically loaded with vegetables and protein, offering a zesty and satisfying culinary experience.",
        content: ["8oz Chana Masala ", "8oz Masala Rice", "Tandoor Roti"],
        price: 8.99,
      },

      {
        id: 3,
        img: "masala_rice.jpeg",
        mealName: "Masala Rice",
        description:
          "Indian masala rice is a fragrant and flavorful dish made by sautéing cooked rice with a blend of aromatic spices like cumin, coriander, and turmeric, along with vegetables and sometimes protein like chicken or shrimp. It's a versatile and comforting dish that's enjoyed as a meal or accompaniment throughout India.",
        content: ["8oz Aloo Gobi ", "8oz Masala Rice", "Tandoor Roti"],
        price: 6.99,
      },
      {
        id: 4,
        img: "Khadai Paneer.jpeg",
        mealName: "Khadai Paneer",
        description:
          "Kadai Paneer is a popular North Indian dish made with cubes of paneer (Indian cottage cheese) cooked in a spicy tomato-based gravy with aromatic spices. It is often prepared in a special wok-like pan called a \"kadai,\" which imparts a unique smoky flavor to the dish.",
        content: ["8oz Baigan Bharta ", "8oz Masala Rice", "Tandoor Roti"],
        price: 14.50,
      },
      // {
      //   id: 5,
      //   img: "Rajma.jpg",
      //   mealName: "Royal Rajma Express",
      //   description:
      //     "Kidney beans cooked in a spicy and tangy tomato-based gravy along with onions and spices.",
      //   content: [
      //     "8oz Rajma ",
      //     "8oz Masala Rice",
      //     "Tandoor Roti",
      //   ],
      //   price: 11.99,
      // },
    ],
  },
  
  {
    id: 3,
    name: "Aahan Bajwa",
    locationOfService: "New Jersey",
    description1: "Amateur at cooking so let's enjoy together",
    description2:
      "Grew up near Bridgewater and now in Edison for work, thanks for checking out my items! ",
    imgSrc: require("../Resources/Chefs/Aahan Bajwa .png"),
    meals: [
      {
        id: 0,
        img: "Palak Paneer.jpg",
        mealName: "Palak Paneer",
        description:
          "Soft paneer (a type of Indian cheese) cubes cooked in a creamy spinach gravy.",
        content: ["8oz Palak Paneer ", "8oz Masala Rice", "Tandoor Roti"],

        price: 11.99,
      },

      {
        id: 1,
        img: "Paneer Tikka.jpg",
        mealName: "Paneer Tikka",
        description:
          "Marinated cubes of paneer (a type of Indian cheese) that are simmered in a rich and creamy tomato-based gravy.",
        content: ["8oz Paneer Tikka Masala", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },

      {
        id: 2,
        img: "Chana Masala.jpg",
        mealName: "Chana Masala",
        description:
          "Chickpeas cooked in a spicy and tangy tomato-based gravy.",
        content: ["8oz Chana Masala ", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },

      {
        id: 3,
        img: "Aloo Gobi.jpg",
        mealName: "Bazigar Aloo Gobi",
        description:
          "A dry curry made with potatoes (aloo) and cauliflower (gobi) that are cooked together with a blend of aromatic spices.",
        content: ["8oz Aloo Gobi ", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },
      {
        id: 4,
        img: "Baigan Bharta.jpg",
        mealName: "Best Baigan Bharta",
        description:
          "Grilled eggplant minced into curry consisting of authentic herbs and spices.",
        content: ["8oz Baigan Bharta ", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },
      {
        id: 5,
        img: "Rajma.jpg",
        mealName: "Royal Rajma Express",
        description:
          "Kidney beans cooked in a spicy and tangy tomato-based gravy along with onions and spices.",
        content: ["8oz Rajma ", "8oz Masala Rice", "Tandoor Roti"],
        price: 11.99,
      },
    ],
  },
];
