// Empty menu oject to start with 

const menu = {};

// Add array for courses section of the menu object

menu['courses'] = {};

// Add an array for each course section of the menu

menu.courses['appetizers'] = [];
menu.courses['mains'] = [];
menu.courses['desserts'] = [];

// Function to add dishes to the menu

menu['addDishToCourse'] = function(courseName, dishName, dishPrice) {
    const dish = {
        'name': dishName,
        'price': dishPrice
    }
    menu.courses[courseName].push(dish);
}

// Function to pick a random dish from a specified course section

menu['getRandomDishFromCourse'] = function(courseName) {
    const dishes = menu.courses[courseName];
    let randomNum = Math.floor(Math.random() * dishes.length);
    return dishes[randomNum];
}

// Function to generate random meal from the menu

menu['generateRandomMeal'] = function() {
    let appetizer = menu.getRandomDishFromCourse('appetizers');
    let main = menu.getRandomDishFromCourse('mains');
    let dessert = menu.getRandomDishFromCourse('desserts');

    let totalPrice = appetizer.price + main.price + dessert.price;

    return `Appetizer: ${appetizer.name}\nMain Course: ${main.name}\nDessert: ${dessert.name}\nTotal Price: $${totalPrice}`;
}

//Add some menu items

menu.addDishToCourse('appetizers', 'Salad', 10);
menu.addDishToCourse('appetizers', 'Bread & Oil', 8);
menu.addDishToCourse('appetizers', 'Cheese Board', 14);

menu.addDishToCourse('mains', 'Lobster', 55);
menu.addDishToCourse('mains', 'Steak', 38);
menu.addDishToCourse('mains', 'Pasta', 27);

menu.addDishToCourse('desserts', 'Gelato', 12);
menu.addDishToCourse('desserts', 'Cake', 10);
menu.addDishToCourse('desserts', 'Cookies', 8);

// Make my meal!

let meal = menu.generateRandomMeal();
console.log(meal);