const favRecipe = {
    title: "Guacamole",
    servings: 4,
    ingredients: ['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper'],
    displayRecipe: function() {
        console.log(this.title);
        console.log(`Serves: ${this.servings}`);
        for(let i=0; i<this.ingredients.length; i++) {
            console.log(`- ${this.ingredients[i]}`);
        }
    }
}

favRecipe.displayRecipe();