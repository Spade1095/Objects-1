const items = [
    { name: "Apple", price: 0.99, catagorys: ["Fruit", "Produce", "Snack"],image: null },
    { name: "Banana", price: 0.59, catagorys: ["Fruit", "Produce"], image: null},
    { name: "Chicken Breast", price: 6.99, catagorys: ["Meat", "Protein", "Fresh"], image: null},
    { name: "Whole Milk", price: 3.49, catagorys: ["Dairy", "Beverage"], image: null },
    { name: "Cheddar Cheese", price: 4.99, catagorys: ["Dairy", "Snack"], image: null },
    { name: "Bread", price: 4.29, catagorys: ["Bakery", "Grains"], image: null },
    { name: "Brown Rice", price: 2.89, catagorys: ["Grains", "Pantry"], image: null },
    { name: "Pasta", price: 1.99, catagorys: ["Grains", "Pantry"], image: null},
    { name: "Olive Oil", price: 8.99, catagorys: ["Pantry", "Cooking"], image: null },
    { name: "Eggs", price: 3.99, catagorys: ["Dairy & Eggs", "Protein"], image: null },
    { name: "Ground Beef", price: 7.49, catagorys: ["Meat", "Protein", "Fresh"], image: null },
    { name: "Salmon Fillet", price: 9.99, catagorys: ["Seafood", "Protein", "Fresh"], image: null },
    { name: "Broccoli", price: 2.29, catagorys: ["Vegetable", "Produce"], image: null},
    { name: "Spinach", price: 2.99, catagorys: ["Vegetable", "Produce", "Leafy Greens"] , image: null},
    { name: "Greek Yogurt", price: 4.49, catagorys: ["Dairy", "Breakfast"], image: null },
    { name: "Almonds", price: 6.49, catagorys: ["Snack", "Nuts", "Pantry"], image: null },
    { name: "Oats", price: 3.19, catagorys: ["Grains", "Breakfast", "Pantry"], image: null},
    { name: "Peanut Butter", price: 4.19, catagorys: ["Pantry", "Spread"], image: null },
    { name: "Avocado", price: 1.49, catagorys: ["Fruit", "Produce"], image: null},
    { name: "Tomato", price: 1.99, catagorys: ["Vegetable", "Produce"], image: null}
];
let cart = []
function addCart(initial,add){
    for(i=0; i<add.length; i++){
        if(items.some(item => item.name === add[i])){
            initial.push(items.find(item => item.name === add[i]))
        } 
        else{
            console.log("Item isnt in list")
            return null
        }
    }
    return initial
}
cart = addCart(cart, ["Olive Oil", "Oats"])
// console.log(cart)

function removeCart(initial, remove){
        for(i=0; i<remove.length; i++){
        if(items.some(item => item.name === remove[i])){
            initial.pop(items.find(item => item.name === remove[i]))
        } 
        else{
            console.log("Item isnt in list")
            return null
        }
    }
    return initial
}

// cart = removeCart(cart, ["Oats"])
// console.log(cart)

function findTotal(cart){
    let total = 0
    for( i=0; i<cart.length; i++){
        total = total + cart[i].price
    }
    return total
}
// console.log(findTotal(cart))

function filter(filter){
    let filteredItems = []
    for(i=0; i<items.length; i++){
        if(items[i].catagorys.includes(filter)){
            filteredItems.push(items[i])
        }
    }
    return filteredItems
}

console.log(filter("Fruit"))