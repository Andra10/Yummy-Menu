const menu = [
    {
        id: 1,
        title: "Soft Pancakes",
        category: "breakfast",
        price: 13.99,
        img: "img/breakfast/pancakes.jpg",
        desc: "Stack of fluffy pancakes tooped with fresh fruit and real Canadian maple sirup"
        
    },

    {
        id: 2,
        title: "Energy Smoothie",
        category: "breakfast",
        price: 6.99,
        img: "img/breakfast/smoothie.jpg",
        desc: "Delicious fresh smoothie made with organic fruit as: strawberry, cherries, watermelon and pomegranate "
        
    },

    {
        id: 3,
        title: "Toast",
        category: "breakfast",
        price: 16.99,
        img: "img/breakfast/toast.jpg",
        desc: "Modern English breakfast with fresh white bread, egg, salad and fresh tomatoes with tompinambur chips"
        
    },

    {
        id: 4,
        title: "Eggs Benedict",
        category: "breakfast",
        price: 15.95,
        img: "img/breakfast/eggs benedict.jpg",
        desc: "Poached egg served on a warm homemade muffin with spinach salad and bernaise sauce "
        
    },

    {
        id: 5,
        title: "Butter Croissants",
        category: "breakfast",
        price: 2.50,
        img: "img/breakfast/croissant.jpg",
        desc: "Fresh butter croissant. Perfect start in the morning"
        
    },

    {
        id: 6,
        title: "Chicken Burger",
        category: "lunch",
        price: 14.95,
        img: "img/lunch/burger.jpg",
        desc: "Juicy chicken burger served between two brioche buns with homemade sauce and arugola salad"
        
    },

    {
        id: 6,
        title: "Spaghetti alla carbonara",
        category: "lunch",
        price: 9.90,
        img: "img/lunch/carbonara.jpg",
        desc: "A classic roman dish. That's all"
        
    },

    {
        id: 7,
        title: "Dumplings",
        category: "lunch",
        price: 17.50,
        img: "img/lunch/dumplings.jpg",
        desc: "Burmese dumpling filled with black tiger shrimps with a spicy coconut sauce"
        
    },

    {
        id: 8,
        title: "Tacos al pastor",
        category: "lunch",
        price: 8.95,
        img: "img/lunch/tacos.jpg",
        desc: "Tacos al pastor made by pork shoulder served with rice and beans"
        
    },

    {
        id: 9,
        title: "Neapolitan Pizza",
        category: "dinner",
        price: 7.50,
        img: "img/dinner/pizza.jpg",
        desc: "Delicious neapolitan pizza made with hydrated dough by 24 hours "
        
    },

    {
        id: 10,
        title: "Short Ribs",
        category: "dinner",
        price: 18.60,
        img: "img/dinner/ribs.jpg",
        desc: "Juicy Nashville Ribs made with honey Jack Daniels sauce"
        
    },

    {
        id: 11,
        title: "NY Ribeye",
        category: "dinner",
        price: 24.90,
        img: "img/dinner/steak.jpg",
        desc: "Marinated and grilled NY Ribeye served with smoky garlic sauce and frech fries"
        
    },

    {
        id: 12,
        title: "sushi",
        category: "dinner",
        price: 19.99,
        img: "img/dinner/sushi.jpg/",
        desc: "Mix 20 Sushi"
        
    },

    {
        id: 13,
        title: "Grilled Chicken Wings",
        category: "dinner",
        price: 15.99,
        img: "img/dinner/wings.jpg",
        desc: "Grilled spicy chicken wings"
        
    },

    {
        id: 14,
        title: "Corona Extra Beer 33cl",
        category: "drinks",
        price: 3.99,
        img: "img/drinks/corona.jpg"
        
    },

    {
        id: 15,
        title: "Gin Tonic",
        category: "drinks",
        price: 7.99,
        img: "img/drinks/gin tonic.jpg",
        
        
    },

    {
        id: 16,
        title: "Handcraft Beer",
        category: "drinks",
        price: 4.99,
        img: "img/drinks/handcraft beer.jpg",
        
    },

    {
        id: 17,
        title: "Mojito",
        category: "drinks",
        price: 8.95,
        img: "img/drinks/mojito.jpg",
        
        
    },

    {
        id: 18,
        title: "red wine",
        category: "drinks",
        price: 34.95,
        img: "img/drinks/red wine.jpg",
        desc: "Chianti Riserva D.O.C.G 2016"
        
    },

    {
        id: 19,
        title: "White wine",
        category: "drinks",
        price: 29.99,
        img: "img/drinks/white wine.jpg",
        desc: "Palacio de Menada"
        
    }

]

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})