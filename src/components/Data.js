const special = {
    name : "pasta alfredo",
    image : "https://as1.ftcdn.net/v2/jpg/03/88/35/68/1000_F_388356842_278zLt0yP5IWihvItePWqXojQaF8GQo8.jpg",
    desciption : "Certainly! Alfredo pasta is a luscious Italian dish featuring fettuccine noodles bathed in a silky sauce made from butter, Parmesan cheese, and black pepper. It’s a comforting classic that satisfies both the palate and the soul.",
    price : "R68"
}

const menu = [
    { name: 'Greek Salad (Horiatiki)', price: '$12.99', description: 'A refreshing summer salad with chopped cucumbers, tomatoes, onion, black olives, and crumbled feta cheese, drizzled with extra virgin olive oil and sprinkled with oregano.', image: 'https://bing.com/th?id=OSK.3527576ab168a43314af999d8d97a8ad' }, 
{ name: 'Pizza Margherita', price: '$14.99', description: 'An iconic Italian pizza with a thin crispy crust, topped with mozzarella cheese, fresh basil leaves, and ripe tomatoes. The colors of the toppings represent the Italian flag.', image: 'https://th.bing.com/th/id/OIP.ngyqhigAn1u1JdHglgT9qQHaF8?rs=1&pid=ImgDetMain' }, 
{ name: 'Moroccan Tagine', price: '$18.99', description: 'A hearty North African stew cooked in a traditional clay pot. It features tender meat (such as lamb or chicken), aromatic spices, dried fruits, and vegetables.', image: 'https://tasteofmaroc.com/wp-content/uploads/2018/02/kefta-tagine-oysy-bigstock-kofta-tajine-kefta-tagine-mo-65105917.jpg' }, 
{ name: 'Pasta Carbonara', price: '$16.99', description: 'A Roman classic made with spaghetti, pancetta or guanciale, eggs, Parmesan cheese, and black pepper. Creamy, rich, and utterly delicious.', image: 'https://bing.com/th?id=OSK.680e15c58e0c13b496edbb8331a037eb' }, 
{ name: 'Caprese Salad', price: '$10.99', description: 'A simple yet elegant dish featuring fresh mozzarella, ripe tomatoes, and basil leaves, drizzled with balsamic glaze and olive oil.', image: 'https://bing.com/th?id=OSK.9c9739e867203ccd80e6b6562460a8db' }, 
{ name: 'Linguine alle Vongole', price: '$20.99', description: 'A seafood lover’s delight! Linguine pasta tossed with fresh clams, garlic, white wine, and a hint of chili flakes.', image: 'https://bing.com/th?id=OSK.e713fac8b7d0bc6772ee7a06a98800d4' }, 
{ name: 'Risotto Milanese', price: '$22.99', description: 'Creamy Arborio rice infused with saffron, butter, and Parmesan cheese. A luxurious and comforting dish from Milan.', image: 'https://bing.com/th?id=OSK.54c7bc3f4e198152b765ba9341a8b553' }, 
{ name: 'Eggplant Parmesan (Melanzane alla Parmigiana)', price: '$15.99', description: 'Layers of breaded and fried eggplant slices, marinara sauce, and melted mozzarella and Parmesan cheeses. Baked to perfection.', image: 'https://bing.com/th?id=OSK.8ee5342317c08237b1e63882761a4959' }, 
{ name: 'Tiramisu', price: '$8.99', description: 'A classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, cocoa powder, and love.', image: 'https://bing.com/th?id=OSK.645d8e894562d416d4e57b1e964891c9' }, 
{ name: 'Osso Buco', price: '$26.99', description: 'Braised veal shanks cooked with white wine, tomatoes, onions, carrots, and gremolata (lemon zest, garlic, and parsley). Served with saffron risotto.', image: 'https://bing.com/th?id=OSK.577b4beffc4959edd37b41916cdc850c' }, 
{ name: 'Bruschetta', price: '$7.99', description: 'Toasted baguette slices rubbed with garlic, topped with diced tomatoes, fresh basil, and a drizzle of olive oil. A delightful appetizer.', image: 'https://bing.com/th?id=OSK.fc1d731b04ea7c13811f18d24c61a717' }, 
{ name: 'Cannoli', price: '$9.99', description: 'Sicilian pastry tubes filled with sweet ricotta cheese, chocolate chips, and a dusting of powdered sugar. Irresistibly crunchy and creamy.', image: 'https://bing.com/th?id=OSK.34ff8f934db798c1298ad5e4aa8af2d9' }, 
{ name: 'Seafood Risotto', price: '$24.99',description :'A luxurious risotto loaded with shrimp, scallops, calamari, and mussels. The flavors of the sea in every spoonful.', image: 'https://bing.com/th?id=OSK.cf29cf92f3a6c974c48d38ae2271b3a1' }
];

let specialties = [
    {
      name: "Hummus",
      description: "A creamy spread made from mashed chickpeas, tahini, olive oil, lemon juice, salt and garlic.",
      price: "$5.99",
      image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/08/Hummus-8.jpg"
    },
    {
      name: "Falafel",
      description: "Deep-fried balls made from ground chickpeas, fava beans, or both, served in a pita.",
      price: "$7.99",
      image: "https://th.bing.com/th/id/OIP.pj0BYIgE7RU6rUZICYeqPQHaEc?w=4480&h=2688&rs=1&pid=ImgDetMain"
    },
    {
      name: "Baklava",
      description: "A sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey.",
      price: "$3.99",
      image: "https://th.bing.com/th/id/OIP.B2t5XiE3YVBj98xjGiSRKAHaE8?rs=1&pid=ImgDetMain"
    }
  ];
  

export default {menu ,special,specialties}