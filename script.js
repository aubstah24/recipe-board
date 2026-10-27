/*
  RECIPE DATA TEMPLATE
  Replace the sample drinks and ingredient quantities below with your cafe's recipes.
  Ingredient quantities are stored per size so the recipe panel changes when a size is selected.
*/
const recipes = [

/* MATCHA DRINKS */

  // MATCHA LATTE
  {
    id: "classic-matcha", name: "Matcha Latte", category: "Matcha", icon: "抹",
    description: "A smooth matcha latte with your choice of milk.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Layered / Hot or Iced",
    sizes: {
      "12oz": {
        Hot: [
          {name: "Honey Syrup", amount: "2 pump"}, { name: "Matcha Powder", amount: "4g" }, {name: "Hot Kettle Water", amount: "50mL"}, { name: "Milk", amount: "9oz" }
        ],
       "Iced": [{name: "Honey Syrup", amount: "2 pump"}, { name: "Batch Matcha", amount: "50mL" }, { name: "Milk", amount: "120mL" },{ name: "Ice", amount: "As needed" }]
    },
      "16oz": {
        Hot: [
         {name: "Honey Syrup", amount: "4 pump"}, { name: "Matcha Powder", amount: "6g" }, {name: "Hot Kettle Water", amount: "70mL"}, { name: "Milk", amount: "10oz" }
        ],
        Iced:[
          {name: "Honey Syrup", amount: "4 pump"}, { name: "Batch Matcha", amount: "70mL" }, { name: "Milk", amount: "150mL" }, { name: "Ice", amount: "As needed" }
        ]
      },
      "20oz": {
        Iced: [
          {name: "Honey Syrup", amount: "5 pump"}, { name: "Batch Matcha", amount: "90mL" }, { name: "Milk", amount: "200mL" }, { name: "Ice", amount: "As needed" }
        ]
      }
    },
    preparation: {
      Hot: [
        "Pump syrup into the cup", "Whisk matcha with hot water until smooth then pour over the syrup in the cup", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Pump syrup into the cup", "Pour in the milk and stir", "Fill with ice", "Squeeze batch matcha over the ice for layered effect"
      ]    
    },
    note: "You can mix the drink for online orders so it is ready at pickup time. For iced drinks, reduce milk volume by 20mL if the drink has a topping to avoid overflow."
  },


// HOJICHA LATTE
  {
    id: "classic-hojicha", name: "Hojicha Latte", category: "Matcha", icon: "抹",
    description: "A smooth hojicha latte with your choice of milk.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Layered / Hot or Iced",
    sizes: {
      "12oz": {
        Hot: [
          { name: "Hojicha Powder", amount: "3g" }, {name: "Hot Kettle Water", amount: "50mL"}, { name: "Milk", amount: "9oz" }
        ],
       "Iced": [{name: "Honey Syrup", amount: "2 pump"}, { name: "Hojicha Powder", amount: "3g" }, {name: "Hot Kettle Water", amount: "50mL"}, { name: "Milk", amount: "120mL" },{ name: "Ice", amount: "As needed" }]
    },
      "16oz": {
        Hot: [
        { name: "Hojicha Powder", amount: "4g" }, , {name: "Hot Kettle Water", amount: "70mL"}, { name: "Milk", amount: "10oz" }
        ],
        Iced:[
          {name: "Honey Syrup", amount: "4 pump"}, { name: "Hojicha Powder", amount: "4g" }, {name: "Hot Kettle Water", amount: "70mL"}, { name: "Milk", amount: "150mL" }, { name: "Ice", amount: "As needed" }
        ]
      },
      "20oz": {
        Iced: [
          { name: "Hojicha Powder", amount: "6g" }, {name: "Hot Kettle Water", amount: "90mL"}, { name: "Milk", amount: "200mL" }, { name: "Ice", amount: "As needed" }
        ]
      }
    },
    preparation: {
      Hot: [
        "Pump syrup into the cup if requested", "Whisk hojicha with hot water until smooth then pour over the syrup in the cup", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Pump syrup into the cup if requested", "Pour in the milk and stir",  "Whisk hojicha with hot water until smooth", "Fill cup with ice", "Pour hojicha over the ice for layered effect"
      ]    
    },
    note: "You can mix the drink for online orders so it is ready at pickup time. For iced drinks, reduce milk volume by 20mL if the drink has a topping to avoid overflow."
  },


// DIRTY MATCHA LATTE
    {
    id: "dirty-matcha", name: "Dirty Matcha Latte", category: "Matcha", icon: "抹",
    description: "A smooth matcha latte with your choice of milk.", temperatures: ["Hot", "Iced"],
    prepTime: "3-4 min", method: "Layered / Hot or Iced",
    sizes: {
      "12oz": {
        Hot: [
          {name: "Honey Syrup", amount: "2 pump"}, { name: "Espresso", amount: "2 shots" }, { name: "Matcha Powder", amount: "3g" }, {name: "Hot Kettle Water", amount: "40mL"}, { name: "Milk", amount: "9oz" }
        ],
       "Iced": [{name: "Honey Syrup", amount: "2 pump"}, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "130mL" },{ name: "Ice", amount: "As needed" }, { name: "Batch Matcha", amount: "40mL" }]
    },
      "16oz": {
        Hot: [
         {name: "Honey Syrup", amount: "2 pump"}, { name: "Espresso", amount: "2 shots" }, { name: "Matcha Powder", amount: "6g" }, {name: "Hot Kettle Water", amount: "70mL"}, { name: "Milk", amount: "10oz" }
        ],
        Iced:[
          {name: "Honey Syrup", amount: "4 pump"}, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "170mL" }, { name: "Ice", amount: "As needed" }, { name: "Batch Matcha", amount: "60mL" }
        ]
      },
      "20oz": {
        Iced: [
          {name: "Honey Syrup", amount: "5 pump"}, { name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "220mL" }, { name: "Ice", amount: "As needed" }, { name: "Batch Matcha", amount: "80mL" }
        ]
      }
    },
    preparation: {
      Hot: [
        "Pump syrup into the cup", "Whisk matcha with hot water until smooth then pour over the syrup in the cup", "Pull espresso shots and pour into the cup", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Pump syrup into the cup", "Pull espresso shots and pour into the cup", "Pour in the milk and stir", "Fill with ice", "Squeeze batch matcha over the ice for layered effect"
      ]    
    },
  },

// STRAWBERRY MATCHA LATTE
  {
    id: "strawberry-matcha", name: "Strawberry Matcha Latte", category: "Matcha", icon: "🍓",
    description: "Layered strawberry and matcha with creamy milk.",
    prepTime: "3 min", method: "Layered / iced",
    sizes: {
      "12oz": [{ name: "Strawberry puree", amount: "20mL" }, { name: "Milk", amount: "120mL" }, { name: "Matcha mixture", amount: "50mL" }, { name: "Ice", amount: "Full cup" }],
      "16oz": [{ name: "Strawberry puree", amount: "25mL" }, { name: "Milk", amount: "150mL" }, { name: "Matcha mixture", amount: "70mL" }, { name: "Ice", amount: "As needed" }],
      "20oz": [{ name: "Strawberry puree", amount: "30mL" }, { name: "Milk", amount: "200mL" }, { name: "Matcha mixture", amount: "90mL" }, { name: "Ice", amount: "Full cup" }]
    },
    steps: [ "Fill the cup with ice.", "Add strawberry puree to the cup.","Pour in milk.", "Slowly top with prepared matcha to create layers."],
    note: "Iced goes first to keep the strawberry puree from sinking"
  },


// UBE MATCHA LATTE
  {
    id: "ube-matcha", name: "Ube Matcha Latte", category: "Matcha", icon: "抹",
    description: "A smooth matcha latte with ube milk.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Layered / Hot or Iced",
    sizes: {
      "12oz": {
        Hot: [
          {name: "Vanilla Syrup", amount: "2 pumps"}, { name: "Matcha Powder", amount: "4g" }, {name: "Hot Kettle Water", amount: "50mL"}, {name: "Ube", amount: "1 Full Dropper"}, { name: "Milk", amount: "9oz" }
        ],
       "Iced": [{name: "Vanilla Syrup", amount: "2 pumps"}, { name: "Milk", amount: "120mL" },{name: "Ube", amount: "1 Full Dropper"}, { name: "Ice", amount: "As needed" }, { name: "Batch Matcha", amount: "50mL" }]
    },
      "16oz": {
        Hot: [
         {name: "Vanilla Syrup", amount: "3 pumps"}, { name: "Matcha Powder", amount: "6g" }, {name: "Hot Kettle Water", amount: "70mL"}, {name: "Ube", amount: "1 Full Dropper"},{ name: "Milk", amount: "10oz" }
        ],
        Iced:[
          {name: "Vanilla Syrup", amount: "3 pumps"}, { name: "Milk", amount: "150mL" }, { name: "Ice", amount: "As needed" }, {name: "Ube", amount: "1 Full Dropper"}, { name: "Batch Matcha", amount: "70mL" }
        ]
      },
      "20oz": {
        Iced: [
          {name: "Vanilla Syrup", amount: "4 pumps"}, { name: "Milk", amount: "200mL" }, {name: "Ube", amount: "1 Full Dropper"}, { name: "Ice", amount: "As needed" }, { name: "Batch Matcha", amount: "90mL" }
        ]
      }
    },
    preparation: {
      Hot: [
        "Pump syrup into the cup", "Whisk matcha with hot water until smooth then pour over the syrup in the cup", "Squeeze 1 full dropper of ube and mix into the matcha", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Pump syrup into the cup", "Pour in the milk", "Squeeze 1 full dropper of ube and mix into the milk and mix well", "Fill with ice leaving space for the matcha layer", "Squeeze batch matcha over the ice for layered effect"
      ]    
    },
    note: "For iced drinks, reduce milk volume by 20mL if the drink has a topping to avoid overflow."
  },


// SAGO MATCHA LATTE
  {
    id: "sago-matcha", name: "Sago Matcha Latte", category: "Matcha", icon: "🍓",
    description: "Layered matcha latte with sago pearls and a cloud of your flavor choice.",
    prepTime: "3 min", method: "Layered / iced",
    sizes: {
      "12oz": [],
      "16oz": [{ name: "Sago pearls", amount: "1 flat ice cream scoop" }, {name: "Sago Choice", amount: "1 pump syrup" }, { name: "Ice", amount: "As needed" }, { name: "Milk", amount: "100mL" }, { name: "Batch Matcha", amount: "50mL" }, {name: "Cloud Topping", amount: "2-3oz"}],
      "20oz": [{ name: "Sago pearls", amount: "1.5 flat ice cream scoops" }, { name: "Milk", amount: "12 oz" }, { name: "Matcha mixture", amount: "3.5 oz" }, { name: "Ice", amount: "As needed" }]
    },
    steps: ["Add sago pearls to the cup with 1 pump of flavor chosen and mix with the spoon to combine and gently separate the sago so it doesn't stick together.", "Fill the cup with ice.", "Pour in milk.", "Slowly top with prepared matcha to create layers."],
    note: "For the sago matcha, you will add 10/15mL of puree over the ice.  Iced goes first to keep the sago pearls from sinking.  You want to gently stir the sago pearls with the syrup to coat them."
  },

  // NANA MATCHA LATTE

   {
    id: "matcha-nana", name: "Da Matcha-Nana Latte", category: "Matcha", icon: "🍌",
    description: "Matcha latte topped with a banana brown sugar pudding cloud.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Layered / iced",
    sizes: {
      "12oz": [{name: "Honey Syrup", amount: "1 pump"}, { name: "Batch Matcha", amount: "50mL" }, { name: "Milk", amount: "120mL" }, { name: "Nana Custard", amount: "2.5 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }],
      "16oz": [{name: "Honey Syrup", amount: "2 pumps"},{ name: "Batch Matcha", amount: "70mL" }, { name: "Milk", amount: "150mL" }, { name: "Nana Custard", amount: "3 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }],
      "20oz": [{name: "Honey Syrup", amount: "3 pumps"},{ name: "Batch Matcha", amount: "90mL" }, { name: "Milk", amount: "200mL" }, { name: "Nana Custard", amount: "4 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }]
    },
    steps: ["Add the syrup, matcha, and milk to the cup then stir well", "Scoop in ice leaving space at the top", "Top with Nana Custard."],
    note: "For Less sweet or No added sweetener, omit the honey syrup."
  },
  
/* ESPRESSO LATTE DRINKS */

  // REGULAR LATTE
  {
    id: "latte", name: "Latte", category: "Espresso Lattes", icon: "☕",
    description: "Espresso, add a sweetener, and silky milk.", temperatures: ["Hot", "Iced"],
    prepTime: "1-2 min", method: "Espresso / hot or iced",
    sizes: {
      "12oz": {
        Hot: [
          { name: "Syrup", amount: "Standard 2 pumps (Follow # on ticket)" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "9oz" }
        ],
        Iced: [
          { name: "Syrup", amount: "Standard 2 pumps (Follow # on ticket)" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "120mL"},  {name: "Ice", amount: "Fill with ice"}
      ]
    },
      "16oz": {
        Hot: [
          { name: "Syrup", amount: "Standard 4 pumps (Follow # on ticket)" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "10oz" }
        ],
        Iced:[
          { name: "Syrup", amount: "Standard 4 pumps (Follow # on ticket)" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "150mL" },  {name: "Ice", amount: "Fill with ice"}
        ]
      },
      "20oz": {
        Iced: [
          { name: "Syrup", amount: "Standard 5 pumps (Follow # on ticket)" }, { name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "230mL (200mL for drinks with a topping)"}, {name: "Ice", amount: "Fill with ice"}
        ]
      }
    },
    preparation: {
      Hot: [
        "Pump syrup into the cup", "Pull espresso shots and empty over the syrup into the cup", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Pump syrup into the cup", "Pull espresso shots and empty over the syrup", "Pour in the milk and stir", "Fill with ice"
      ]    
    },
    note: "For iced drinks, use the lower milk volume if the drink has a topping to avoid overflow."

  },


  // MOCHA LATTE
  {
    id: "mocha-latte", name: "Mocha Latte", category: "Espresso Lattes", icon: "🍫",
    description: "Espresso and chocolate balanced with milk.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Espresso / hot or iced",
   sizes: {
      "12oz": {
        Hot: [
          { name: "Hollander Chocolate syrup", amount: "1 pump" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "9oz" }
        ],
        Iced: [
          { name: "Hollander Chocolate syrup", amount: "1 pump" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "120mL"},  {name: "Ice", amount: "Fill with ice"}
      ]
    },
      "16oz": {
        Hot: [
          { name: "Hollander Chocolate syrup", amount: "1.5 pumps" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "10oz" }
        ],
        Iced:[
          { name: "Hollander Chocolate syrup", amount: "1.5 pumps" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "150mL" },  {name: "Ice", amount: "Fill with ice"}
        ]
      },
      "20oz": {
        Iced: [
          { name: "Hollander Chocolate syrup", amount: "2 pumps" }, { name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "230mL (200mL for drinks with a topping)"}, {name: "Ice", amount: "Fill with ice"}
        ]
      }
    },
    preparation: {
      Hot: [
        "Pump syrup into the cup", "Pull espresso shots and empty over the syrup into the cup", "Stir to incorporate the chocolate", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Pump syrup into the cup", "Pull espresso shots and empty over the syrup", "Stir to incorporate the chocolate", "Pour in the milk and stir again", "Fill with ice"
      ]    
    },
    note: "For iced drinks, use the lower milk volume if the drink has a topping to avoid overflow."

  },

  // WHITE MOCHA LATTE
  {
    id: "white-mocha-latte", name: "White Mocha Latte", category: "Espresso Lattes", icon: "🍫",
    description: "Espresso and white chocolate balanced with milk.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Espresso / hot or iced",
   sizes: {
      "12oz": {
        Hot: [
          { name: "Hollander White Chocolate syrup", amount: "1 pump" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "9oz" }
        ],
        Iced: [
          { name: "Hollander White Chocolate syrup", amount: "1 pump" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "120mL"},  {name: "Ice", amount: "Fill with ice"}
      ]
    },
      "16oz": {
        Hot: [
          { name: "Hollander White Chocolate syrup", amount: "1.5 pumps" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "10oz" }
        ],
        Iced:[
          { name: "Hollander White Chocolate syrup", amount: "1.5 pumps" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "150mL" },  {name: "Ice", amount: "Fill with ice"}
        ]
      },
      "20oz": {
        Iced: [
          { name: "Hollander White Chocolate syrup", amount: "2 pumps" }, { name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "230mL (200mL for drinks with a topping)"}, {name: "Ice", amount: "Fill with ice"}
        ]
      }
    },
    preparation: {
      Hot: [
        "Pump syrup into the cup", "Pull espresso shots and empty over the syrup into the cup", "Stir to incorporate the white chocolate", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Pump syrup into the cup", "Pull espresso shots and empty over the syrup", "Stir to incorporate the white chocolate", "Pour in the milk and stir again", "Fill with ice"
      ]    
    },
    note: "For iced drinks, use the lower milk volume if the drink has a topping to avoid overflow."

  },



  // HAWAIIAN LATTE
   {
    id: "hawaiian-latte", name: "Hawaiian Latte", category: "Espresso Lattes", icon: "☕",
    description: "Espresso latte with coconut and mac nut syrup.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Espresso / hot or iced",
   sizes: {
      "12oz": {
        Hot: [
          { name: "Coconut Syrup", amount: "1 pump" },
          { name: "Mac Nut Syrup", amount: "2 pumps" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "9oz" }
        ],
        Iced: [
          { name: "Coconut Syrup", amount: "1 pump" }, { name: "Mac Nut Syrup", amount: "2 pumps" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "120mL"},  {name: "Ice", amount: "Fill with ice"}
      ]
    },
      "16oz": {
        Hot: [
          { name: "Coconut Syrup", amount: "1 pump" },
          { name: "Mac Nut Syrup", amount: "3 pumps" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "10oz" }
        ],
        Iced:[
          { name: "Coconut Syrup", amount: "1 pump" }, { name: "Mac Nut Syrup", amount: "3 pumps" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "150mL" },  {name: "Ice", amount: "Fill with ice"}
        ]
      },
      "20oz": {
        Iced: [
          { name: "Coconut Syrup", amount: "2 pumps" }, { name: "Mac Nut Syrup", amount: "4 pumps" }, { name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "230mL (200mL for drinks with a topping)"}, {name: "Ice", amount: "Fill with ice"}
        ]
      }
    },
    preparation: {
      Hot: [
        "Squeeze condensed mixture into the cup", "Pull espresso shots and empty over the syrup into the cup", "Stir until incorporated", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Squeeze condensed mixture into the cup", "Pull espresso shots and empty over the syrup", "Stir until incorporated", "Pour in the milk and stir again", "Fill with ice"
      ]    
    },
    note: "For iced drinks, use the lower milk volume if the drink has a topping to avoid overflow."

  },


  

  // VANILLA MALT LATTE
   {
    id: "vanilla-malt-latte", name: "Vanilla Malt Latte", category: "Espresso Lattes", icon: "☕",
    description: "Espresso latte with vanilla and malt.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Espresso / hot or iced",
   sizes: {
      "12oz": {
        Hot: [
          { name: "Vanilla Syrup", amount: "2 pumps" },
          { name: "Malt Powder", amount: "1 scoop" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "9oz" }
        ],
        Iced: [
          { name: "Vanilla Syrup", amount: "2 pumps" }, { name: "Malt Powder", amount: "1 scoop" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "100mL"},  {name: "Ice", amount: "Fill with ice"}
      ]
    },
      "16oz": {
        Hot: [
          { name: "Vanilla Syrup", amount: "3 pumps" },
          { name: "Malt Powder", amount: "2 scoops" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "10oz" }
        ],
        Iced:[
          { name: "Vanilla Syrup", amount: "3 pumps" }, { name: "Malt Powder", amount: "2 scoops" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "130mL" },  {name: "Ice", amount: "Fill with ice"}
        ]
      },
      "20oz": {
        Iced: [
          { name: "Vanilla Syrup", amount: "4 pumps" }, { name: "Malt Powder", amount: "3 scoops" }, { name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "230mL (200mL for drinks with a topping)"}, {name: "Ice", amount: "Fill with ice"}
        ]
      }
    },
    preparation: {
      Hot: [
        "Squeeze condensed mixture into the cup", "Pull espresso shots and empty over the syrup into the cup", "Stir until incorporated", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Squeeze condensed mixture into the cup", "Pull espresso shots and empty over the syrup", "Stir until incorporated", "Pour in the milk and stir again", "Fill with ice"
      ]    
    },
    note: "For iced drinks, use the lower milk volume if the drink has a topping to avoid overflow."

  },



  // THAI LATTE
  {
    id: "thai-latte", name: "Thai Latte", category: "Espresso Lattes", icon: "☕",
    description: "Espresso and condensed milk balanced with evaporated milk.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Espresso / hot or iced",
   sizes: {
      "12oz": {
        Hot: [
          { name: "Condensed Mixture (Mix)", amount: "40mL" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "9oz" }
        ],
        Iced: [
          { name: "Condensed Mixture (Mix)", amount: "40mL" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "100mL"},  {name: "Ice", amount: "Fill with ice"}
      ]
    },
      "16oz": {
        Hot: [
          { name: "Condensed Mixture (Mix)", amount: "60mL" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "10oz" }
        ],
        Iced:[
          { name: "Condensed Mixture (Mix)", amount: "60mL" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "130mL" },  {name: "Ice", amount: "Fill with ice"}
        ]
      },
      "20oz": {
        Iced: [
          { name: "Condensed Mixture (Mix)", amount: "90mL" }, { name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "180mL (200mL for drinks with a topping)"}, {name: "Ice", amount: "Fill with ice"}
        ]
      }
    },
    preparation: {
      Hot: [
        "Squeeze condensed mixture into the cup", "Pull espresso shots and empty over the syrup into the cup", "Stir until incorporated", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Squeeze condensed mixture into the cup", "Pull espresso shots and empty over the syrup", "Stir until incorporated", "Pour in the milk and stir again", "Fill with ice"
      ]    
    },
    note: "For iced drinks, use the lower milk volume if the drink has a topping to avoid overflow."

  },


  //  UBE LATTE
  {
    id: "ube-latte", name: "Ube Latte", category: "Espresso Lattes", icon: "☕",
    description: "Espresso and ube with milk.", temperatures: ["Hot", "Iced"],
    prepTime: "2–3 min", method: "Espresso / hot or iced",
   sizes: {
      "12oz": {
        Hot: [
          { name: "Vanilla syrup", amount: "2 pumps" },
          { name: "Ube", amount: "Full Dropper" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "9oz" }
        ],
        Iced: [
          { name: "Vanilla syrup", amount: "2 pumps" }, { name: "Ube", amount: "Full Dropper" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "120mL"},  {name: "Ice", amount: "Fill with ice"}
      ]
    },
      "16oz": {
        Hot: [
          { name: "Vanilla syrup", amount: "3 pumps" },
          { name: "Ube", amount: "Full Dropper" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "9oz" }
        ],
        Iced:[
          { name: "Vanilla syrup", amount: "3 pumps" }, { name: "Ube", amount: "Full Dropper" }, { name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "150mL" },  {name: "Ice", amount: "Fill with ice"}
        ]
      },
      "20oz": {
        Iced: [
          { name: "Vanilla syrup", amount: "4 pumps" }, { name: "Ube", amount: "Full Dropper" }, { name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "250mL (200mL for drinks with a topping)"}, {name: "Ice", amount: "Fill with ice"}
        ]
      }
    },
    preparation: {
      Hot: [
        "Pump syrup into the cup", "Pull espresso shots and empty over the syrup into the cup", "Add in the ube dropper", "Swirl to incorporate the syrup", "Steam milk, wipe the steam wand well, and purge wand", "Circle the milk pitcher then pour into the cup leaving 1/4 inch space from the top"
      ],
      Iced: [
        "Pump syrup into the cup", "Pour in the milk", "Add in the ube dropper", "Stir to incorporate the ube", "Fill with ice", "Pull espresso shots and empty over ice to create a layered effect"
      ]    
    },
    note: "For iced drinks, use the lower milk volume if the drink has a topping to avoid overflow."

  },


  // Black Honey Cold Brew Latte
  {
    id: "blk-honey-coldbrew-latte", name: "Black Honey Cold Brew Latte", category: "Espresso Lattes", icon: "☕",
    description: "Cold brew and condensed milk sweetened with kuromitsu.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Espresso / Iced",
   sizes: {
      "12oz": [
          { name: "Honey Syrup", amount: "1 pump" }, {name: "Black Sugar Syrup", amount: "15mL" }, { name: "Condensed Mixture (Mix)", amount: "15mL" }, { name: "Cold Brew", amount: "150mL" }, { name: "Milk", amount: "40mL"},  {name: "Ice", amount: "Fill with ice"}
      ],
      "16oz": [
          { name: "Honey Syrup", amount: "2 pumps" }, { name: "Black Sugar Syrup", amount: "20mL" }, { name: "Condensed Mixture (Mix)", amount: "60mL" }, { name: "Cold Brew", amount: "200mL" }, { name: "Milk", amount: "60mL" },  {name: "Ice", amount: "Fill with ice"}
        ],
      "20oz": [ 
          { name: "Honey Syrup", amount: "3 pumps" }, { name: "Black Sugar Syrup", amount: "25mL" }, { name: "Condensed Mixture (Mix)", amount: "90mL" }, { name: "Cold Brew", amount: "250mL" }, { name: "Milk", amount: "80mL"}, {name: "Ice", amount: "Fill with ice"}
        ]
    },
   steps: ["Combine all the ingredients in the cup and stir well", "Fill with ice and serve."],
  },

/* CUSTARD LATTE DRINKS */


  // BIG ISLAND VOG LATTE
  {
    id: "big-island-vog", name: "Da Big Island Vog Latte", category: "Custard Lattes", icon: "🌋",
    description: "A London Fog latte topped with a matcha custard.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Layered / iced",
    sizes: {
      "12oz": [{ name: "Earl Grey", amount: "30mL" }, { name: "Milk", amount: "120mL" }, { name: "Matcha Custard", amount: "see paper instructions on Top Fridge" }, { name: "Ice", amount: "Fill with 1/2 inch space" }],
      "16oz": [{ name: "Earl Grey", amount: "40mL" }, { name: "Milk", amount: "150mL" }, { name: "Matcha Custard", amount: "see paper instructions on Top Fridge" }, { name: "Ice", amount: "Fill with 1 inch space" }],
      "20oz": [{ name: "Earl Grey", amount: "50mL" }, { name: "Milk", amount: "230mL" }, { name: "Matcha Custard", amount: "see paper instructions on Top Fridge" }, { name: "Ice", amount: "Fill with 1 inch space" }]
    },
    steps: ["Add Earl Grey syrup to the cup.", ".Pour in milk and stir", "Fill with ice leaving 1-inch from the top", "Prepare the matcha pudding cloud using the cafe's topping procedure.", "Pour the custard over the drink and serve."],
  },

  /* MATCHA-NANA LATTE */
  {
    id: "matcha-nana-custard", name: "Da Matcha-Nana Latte", category: "Custard Lattes", icon: "🍌",
    description: "Matcha latte topped with a banana brown sugar custard.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Layered / iced",
    sizes: {
      "12oz": [{name: "Honey Syrup", amount: "1 pump"}, { name: "Batch Matcha", amount: "50mL" }, { name: "Milk", amount: "120mL" }, { name: "Nana Custard", amount: "2.5 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }],
      "16oz": [{name: "Honey Syrup", amount: "2 pumps"},{ name: "Batch Matcha", amount: "70mL" }, { name: "Milk", amount: "150mL" }, { name: "Nana Custard", amount: "3 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }],
      "20oz": [{name: "Honey Syrup", amount: "3 pumps"},{ name: "Batch Matcha", amount: "90mL" }, { name: "Milk", amount: "200mL" }, { name: "Nana Custard", amount: "4 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }]
    },
    steps: ["Add the syrup, matcha, and milk to the cup then stir well", "Scoop in ice leaving space at the top", "Top with Nana Custard."],
    note: "For Less sweet or No added sweetener, omit the honey syrup."
  },

  // DA NANA LATTE
  {
    id: "da-nana", name: "Da Nana Latte", category: "Custard Lattes", icon: "🍌",
    description: "Espresso latte topped with a banana brown sugar custard", temperatures: ["Iced"],
    prepTime: "2-3 min", method: "Layered / iced",
    sizes: {
      "12oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "120mL" }, { name: "Nana Custard", amount: "2.5 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }],
      "16oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "150mL" }, { name: "Nana Custard", amount: "3 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }],
      "20oz": [{ name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "200mL" }, { name: "Nana Custard", amount: "4 floz" }, { name: "Ice", amount: "Fill with 1 inch space" }]
    },
    steps: ["Add the syrup, espresso, and milk to the cup then stir well", "Scoop in ice leaving space at the top", "Top with Nana Custard."],
  },


   // Salted Caramel Latte 
  {
    id: "salted-caramel", name: "Salted Caramel Latte", category: "Custard Lattes", icon: "🍌",
    description: "Espresso latte topped with a salted caramel custard", temperatures: ["Iced"],
    prepTime: "2-3 min", method: "Layered / iced",
    sizes: {
      "12oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "120mL" }, { name: "Custard", amount: "1.7 floz" }, {name: "Torani Caramel Sauce", amount: "20mL (0.7 floz)"}, { name: "Ice", amount: "Fill with 1 inch space" }],
      "16oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "150mL" }, { name: "Custard", amount: "2 floz" }, {name: "Torani Caramel Sauce", amount: "30mL (1.0 floz)"},{ name: "Ice", amount: "Fill with 1 inch space" }],
      "20oz": [{ name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "200mL" }, { name: "Custard", amount: "3 floz" }, {name: "Torani Caramel Sauce", amount: "40mL (1.3 floz)"},{ name: "Ice", amount: "Fill with 1 inch space" }]
    },
    steps: ["Add the syrup, espresso, and milk to the cup then stir well", "Scoop in ice leaving space at the top", "Top with Custard."],
  },


     // Salted Maple Latte 
  {
    id: "salted-maple", name: "Salted Maple Latte", category: "Custard Lattes", icon: "☕",
    description: "Espresso latte topped with a salted maple custard", temperatures: ["Iced"],
    prepTime: "2-3 min", method: "Layered / iced",
    sizes: {
      "12oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "120mL" }, { name: "Custard", amount: "1.7 floz" }, {name: "Maple Syrup", amount: "20mL (0.7 floz)"}, { name: "Ice", amount: "Fill with 1 inch space" }],
      "16oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Milk", amount: "150mL" }, { name: "Custard", amount: "2 floz" }, {name: "Maple Syrup", amount: "30mL (1.0 floz)"},{ name: "Ice", amount: "Fill with 1 inch space" }],
      "20oz": [{ name: "Espresso", amount: "4 shots" }, { name: "Milk", amount: "200mL" }, { name: "Custard", amount: "3 floz" }, {name: "Maple Syrup", amount: "40mL (1.3 floz)"},{ name: "Ice", amount: "Fill with 1 inch space" }]
    },
    steps: ["Add the syrup, espresso, and milk to the cup then stir well", "Scoop in ice leaving space at the top", "Top with Custard."],
  },


/* COFFEE DRINKS */

// Black Honey Cold Brew Latte
  {
    id: "blk-honey-coldbrew-latte", name: "Black Honey Cold Brew Latte", category: "Regular Coffee", icon: "☕",
    description: "Cold brew and condensed milk sweetened with kuromitsu.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Espresso / Iced",
   sizes: {
      "12oz": [
          { name: "Honey Syrup", amount: "1 pump" }, {name: "Black Sugar Syrup", amount: "15mL" }, { name: "Condensed Mixture (Mix)", amount: "15mL" }, { name: "Cold Brew", amount: "150mL" }, { name: "Milk", amount: "40mL"},  {name: "Ice", amount: "Fill with ice"}
      ],
      "16oz": [
          { name: "Honey Syrup", amount: "2 pumps" }, { name: "Black Sugar Syrup", amount: "20mL" }, { name: "Condensed Mixture (Mix)", amount: "60mL" }, { name: "Cold Brew", amount: "200mL" }, { name: "Milk", amount: "60mL" },  {name: "Ice", amount: "Fill with ice"}
        ],
      "20oz": [ 
          { name: "Honey Syrup", amount: "3 pumps" }, { name: "Black Sugar Syrup", amount: "25mL" }, { name: "Condensed Mixture (Mix)", amount: "90mL" }, { name: "Cold Brew", amount: "250mL" }, { name: "Milk", amount: "80mL"}, {name: "Ice", amount: "Fill with ice"}
        ]
    },
   steps: ["Combine all the ingredients in the cup and stir well", "Fill with ice and serve."],
  },

  // Brewed Coffee
  {
    id: "brew-coffee", name: "Brewed Coffee", category: "Regular Coffee", icon: "☕",
    description: "A simple cup of freshly brewed coffee.", temperatures: ["Hot"],
    prepTime: "1-2 min", method: "Brewed",
    sizes: {},
   steps: ["Firehouse Coffee Beans", "2 pulses in the coffee grinder", "Ensure setting is on half batch button", "Press Brew A and wait until time is completed finished", "Dispense in a cup."],
  },


// Cold Brew
  {
    id: "cold-brew", name: "Cold Brew", category: "Regular Coffee", icon: "☕",
    description: "A simple cup of cold brew coffee.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Steeped",
    sizes: {},
   steps: ["Fill cup with cold brew up to the top of logo", "Fill with ice and serve."],
  },


  // Iced Coffee
  {
    id: "iced-coffee", name: "Iced Coffee", category: "Regular Coffee", icon: "☕",
    description: "A simple cup of iced brewed coffee.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Brewed",
    sizes: {},
   steps: ["Fill a clean milk pitcher with hot brewed coffee", "Fill half of a shallow bowl with ice and water then place the milk pitcher in it", "Ensure the coffee reached closer to lukewarm temperature", "Pour the coffee into a cup filled with ice and serve."],
  },

  // Americano
  {
    id: "americano", name: "Americano", category: "Regular Coffee", icon: "☕",
    description: "A simple cup of freshly brewed coffee.", temperatures: ["Hot", "Iced"],
    prepTime: "1-2 min", method: "Espresso / hot or iced",
    sizes: { 
      
      "12oz": {
        "Hot": [{ name: "Espresso", amount: "2 shots"},  { name: "Kettle RO Water", amount: "Fill with 1/4 inch space" }],
        "Iced": [{ name: "RO Water", amount: "Half way of cup" }, { name: "Espresso", amount: "2 shots"},  {name: "Ice", amount: "Fill with ice"}]
    },
      "16oz": {
          "Hot": [{ name: "Espresso", amount: "2 shots"},  { name: "Kettle RO Water", amount: "Fill with 1/4 inch space" }],
        "Iced": [{ name: "RO Water", amount: "Half way of cup" }, { name: "Espresso", amount: "2 shots"},  {name: "Ice", amount: "Fill with ice"}
        ]},  
      "20oz": {
          "Hot": [],
        "Iced": [
         { name: "RO Water", amount: "Half way of cup" }, { name: "Espresso", amount: "4 shots"},  {name: "Ice", amount: "Fill with ice"}
        ]}},
   preparation: {
      Hot:["Heat RO water in the kettle to 170 degrees Farenheit", "Pour in espresso shots", "Pour in water up to 1/4 inch from the top", "Fill cup half way with water"],
      Iced: ["Fill cup half way with water", "Pour in espresso shots", "Fill with ice and serve."],
   }
  },



/* TEAS & LEMONADES */


// HOT TEA
{
    id: "hot-tea", name: "Hot Tea", category: "Teas/Lemonade", icon: "🍵",
    description: "A simple cup of hot tea.", temperatures: ["Hot"],
    prepTime: "1-2 min", method: "Steeped",
    sizes: {
      "12oz": {
        Hot: [
          { name: "Tea Bag", amount: "2 tea bags of their choice" },
          { name: "RO Kettle Water", amount: "Fill cup with hot water" }
        ],
        Iced: [
         
      ]
    },
      "16oz": {
        Hot: [
          { name: "Syrup", amount: "2 bags of their choice" },
          { name: "Espresso", amount: "2 shots" },
          { name: "Whole milk", amount: "10oz" }
        ],
        Iced:[
         
        ]
      }
    },
    preparation: {
      Hot: [
       "Heat up RO water in the kettle to 170 degrees Farenheit", "Put the tea bags in the cup and steep for 1-2 minutes", "Remove one tea bag and serve."
      ]  
    },

  },


  // Iced Tea
  {
    id: "iced-tea", name: "Iced Tea", category: "Teas/Lemonade", icon: "🍋" ,
    description: "A simple cup of iced tea.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Built / iced",
    sizes: {
      "12oz": [{name: "Syrup Flavor", amount: "2 pumps"}, { name: "Black/Green Tea", amount: "Fill to the top of logo" }, {name: "Ice", amount: "Fill with ice"}],
      "16oz": [{name: "Syrup Flavor", amount: "3 pumps"}, { name: "Black/Green Tea", amount: "Fill to the top of logo" }, {name: "Ice", amount: "Fill with ice"}],
      "20oz": [{name: "Syrup Flavor", amount: "4 pumps"}, { name: "Black/Green Tea", amount: "Fill to the top of logo" }, {name: "Ice", amount: "Fill with ice"}]
    },
    steps: ["If syrup is used, pump it into the cup", "Pour in black/green tea into the cup and stir if syrup was added", "Fill with ice and serve."],
  },
  

// Tea Lemonade
  {
    id: "tea-lemonade", name: "Tea Lemonade", category: "Teas/Lemonade", icon: "🍋" ,
    description: "A simple cup of lemonade.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Built / iced",
    sizes: {
      "12oz": [{name: "Syrup Flavor", amount: "2 pumps"}, { name: "Lemonade", amount: "100mL" }, { name: "Black/Green Tea", amount: "100mL" },{name: "Ice", amount: "Fill with ice"}],
      "16oz": [{name: "Syrup Flavor", amount: "3 pumps"}, { name: "Lemonade", amount: "120mL" }, { name: "Black/Green Tea", amount: "120mL" },{name: "Ice", amount: "Fill with ice"}],
      "20oz": [{name: "Syrup Flavor", amount: "4 pumps"}, { name: "Lemonade", amount: "150mL" }, { name: "Black/Green Tea", amount: "150mL" },{name: "Ice", amount: "Fill with ice"}]
    },
    steps: ["If syrup is used, pump it into the cup", "Pour in the tea and lemonade into the cup and stir if syrup was added", "Fill with ice and serve."],
  },

  // Lemonade
  {
    id: "lemonade", name: "Lemonade", category: "Teas/Lemonade", icon: "🍋" ,
    description: "A simple cup of lemonade.", temperatures: ["Iced"],
    prepTime: "1-2 min", method: "Built / iced",
    sizes: {
      "12oz": [{name: "Syrup Flavor", amount: "2 pumps"}, { name: "Lemonade", amount: "Fill to the top of logo" }, {name: "Ice", amount: "Fill with ice"}],
      "16oz": [{name: "Syrup Flavor", amount: "3 pumps"}, { name: "Lemonade", amount: "Fill to the top of logo" }, {name: "Ice", amount: "Fill with ice"}],
      "20oz": [{name: "Syrup Flavor", amount: "4 pumps"}, { name: "Lemonade", amount: "Fill to the top of logo" }, {name: "Ice", amount: "Fill with ice"}]
    },
    steps: ["If syrup is used, pump it into the cup", "Pour in lemonade into the cup and stir if syrup was added", "Fill with ice and serve."],
  },



/* DIRTY SODA */

  //DIY DIRTY SODA
  {
    id: "dirty-soda", name: "DIY Dirty Soda", category: "Dirty Sodas", icon: "🥤",
    description: "Large cup only with choice soda with flavors of their choice",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [{ name: "DIY Dirty Soda", amount: "20 oz" }],
      "16oz": [{ name: "DIY Dirty Soda", amount: "20 oz" }],
      "20oz": [{ name: "DIY Dirty Soda", amount: "20 oz" }, { name: "Dominant Syrup", amount: "2 pumps" }, { name: "Weaker Syrup", amount: "3 pumps" }, { name: "Ice", amount: "Halfway, then top off" }, { name: "Creamer", amount: "3 pumps" }]
    },
    steps: ["Pump syrup into 20oz cup", "Fill halfway with ice", "Slowly pour in soda", "Add in 3 pumps of creamer", "Gently stir and serve"],
    note: "Skip creamer if label says 'No creamer' on it."
  },


  // Sweetheart Dirty Soda
  {
    id: "sweetheart-dirty-soda", name: "Sweetheart Dirty Soda", category: "Dirty Sodas", icon: "🥤",
    description: "Large cup only with choice soda with flavors of their choice",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [],
      "16oz": [],
      "20oz": [{ name: "Sweetheart Dirty Soda", amount: "20 oz" }, { name: "Strawberry Syrup", amount: "5 pumps" }, { name: "Ice", amount: "Halfway, then top off" }, { name: "Creamer", amount: "3 pumps" }]
    },
    steps: ["Pump syrup into 20oz cup", "Fill halfway with ice", "Slowly pour in soda", "Add in 3 pumps of creamer", "Gently stir and serve"],
    note: "Skip creamer if label says 'No creamer' on it."
  },


  // POG Dirty Soda
    {
    id: "POG-dirty-soda", name: "POG Dirty Soda", category: "Dirty Sodas", icon: "🥤",
    description: "Large cup only with choice soda with flavors of their choice",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [],
      "16oz": [],
      "20oz": [{ name: "POG Dirty Soda", amount: "20 oz" }, { name: "Harder's Passion Fruit Guava Syrup", amount: "5 pumps" }, { name: "Ice", amount: "Halfway, then top off" }, { name: "Creamer", amount: "3 pumps" }]
    },
    steps: ["Pump syrup into 20oz cup", "Fill halfway with ice", "Slowly pour in soda", "Add in 3 pumps of creamer", "Gently stir and serve"],
    note: "Skip creamer if label says 'No creamer' on it."
  },


  // Experiment626 Dirty Soda
  {
    id: "Experiment626-dirty-soda", name: "Experiment626 Dirty Soda", category: "Dirty Sodas", icon: "🥤",
    description: "Large cup only with choice soda with flavors of their choice",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [],
      "16oz": [],
      "20oz": [{ name: "Experiment626 Dirty Soda", amount: "20 oz" }, { name: "Vanilla Syrup", amount: "1 pump" }, { name: "Blue Cotton Candy Syrup", amount: "4 pumps" }, { name: "Ice", amount: "Halfway, then top off" }, { name: "Creamer", amount: "3 pumps" }]
    },
    steps: ["Pump syrup into 20oz cup", "Fill halfway with ice", "Slowly pour in soda", "Add in 3 pumps of creamer", "Gently stir and serve"],
    note: "Skip creamer if label says 'No creamer' on it."
  },


  // Heihei Dirty Soda

   {
    id: "Heihei-dirty-soda", name: "Heihei Dirty Soda", category: "Dirty Sodas", icon: "🥤",
    description: "Large cup only with choice soda with flavors of their choice",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [],
      "16oz": [],
      "20oz": [{ name: "Heihei Dirty Soda", amount: "20 oz" }, { name: "Passion Fruit Syrup", amount: "2 pump" }, { name: "Mango Syrup", amount: "3 pumps" }, { name: "Ice", amount: "Halfway, then top off" }, { name: "Creamer", amount: "3 pumps" }]
    },
    steps: ["Pump syrup into 20oz cup", "Fill halfway with ice", "Slowly pour in soda", "Add in 3 pumps of creamer", "Gently stir and serve"],
    note: "Skip creamer if label says 'No creamer' on it."
  },



/* KEIKI MENU */



  // Pink Milk
  {
    id: "Pink-Milk", name: "Pink Milk", category: "Keiki", icon: "�",
    description: "A delightful blend of strawberry and milk",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [{ name: "Strawberry Dropper", amount: "2 Full droppers" }, { name: "Pink Dropper", amount: "1 Full dropper" }, { name: "Milk", amount: "3/4 way" }, { name: "Ice", amount: "Fill with ice" }],
    },
    steps: ["Stir together all the ingredients until well combined", "Fill with ice and serve."],
  },


 // Blue Milk
  {
    id: "Blue-Milk", name: "Blue Milk", category: "Keiki", icon: "",
    description: "A delightful blend of blue and strawberry flavored milk",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [{ name: "Strawberry Dropper", amount: "2 Full droppers" }, { name: "Blue Dropper", amount: "1 Full dropper" }, { name: "Milk", amount: "3/4 way" }, { name: "Ice", amount: "Fill with ice" }],
    },
    steps: ["Stir together all the ingredients until well combined", "Fill with ice and serve."],
  },


   // Chocolate Milk
  {
    id: "Chocolate-Milk", name: "Chocolate Milk", category: "Keiki", icon: "",
    description: "A delightful blend of chocolate and milk",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [{ name: "Hersheys Chocolate Syrup", amount: "15mL" }, { name: "Milk", amount: "3/4 way" }, { name: "Ice", amount: "Fill with ice" }],
    },
    steps: ["Pour in 1/4 cup of milk first then add the chocolate syrup", "Froth to ensure it's well combined", "Fill with the rest of milk to 3/4 of cup", "Fill with ice and serve."],
  },


  // Hot Chocolate Milk
  {
    id: "Hot-Chocolate-Milk", name: "Hot Chocolate Milk", category: "Keiki", icon: "",
    description: "A delightful blend of chocolate and milk",
    prepTime: "1–2 min", method: "Built / Hot",
    sizes: {
      "12oz": [{ name: "Hersheys Chocolate Syrup", amount: "15mL" }, { name: "Milk", amount: "8oz" }],
    },
    steps: ["Put the chocolate syrup into the cup", "Steam whole milk to kids temperature", "Pour the steamed milk into the cup and stir well", "Serve."],
  }
 ];







// Defaults for optional temperature and ingredient modifiers. Customize per drink as needed.
recipes.forEach(recipe => {
  if (!recipe.temperatures) {
    recipe.temperatures = ["Matcha", "Lattes", "Custard Lattes"].includes(recipe.category) ? ["Hot", "Iced"] : ["Iced"];
  }
  if (!recipe.modifiers) {
    recipe.modifiers = {
      /*milk: ["Whole milk", "Oat milk", "Soy milk"],*/
      sweetness: ["Regular", "Less sweet", "No added sweetener"],
      extras: recipe.category === "Teas" ? ["No extra topping", "Extra boba"] : ["No extra topping", "Extra topping"]
    };
  }
});

const categories = ["All", "Monthly Specials", "Matcha", "Espresso Lattes", "Custard Lattes", "Regular Coffee", "Teas/Lemonade", "Dirty Sodas", "Keiki"];
let activeCategory = "All";
let activeRecipeId = null;
let activeSize = "16oz";
let activeTemperature = "Iced";
let selectedModifiers = {};
let searchTerm = "";

const categoryNav = document.getElementById("categoryNav");
const recipeSections = document.getElementById("recipeSections");
const recipePanel = document.getElementById("recipePanel");
const searchInput = document.getElementById("searchInput");

function renderCategoryNav() {
  categoryNav.innerHTML = categories.map(category => `
    <button class="category-pill ${activeCategory === category ? "active" : ""}"
      type="button" data-category="${category}">${category}</button>
  `).join("");
  categoryNav.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategoryNav();
      renderRecipeSections();
    });
  });
}

function getVisibleRecipes() {
  return recipes.filter(recipe => {
    const matchesCategory = activeCategory === "All" || recipe.category === activeCategory;
    const matchesSearch = `${recipe.name} ${recipe.category}`.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function renderRecipeSections() {
  const visibleRecipes = getVisibleRecipes();
  if (!visibleRecipes.length) {
    recipeSections.innerHTML = '<p class="no-results">No drinks found. Try another search.</p>';
    return;
  }

  const sectionCategories = activeCategory === "All" ? categories.slice(1) : [activeCategory];
  recipeSections.innerHTML = sectionCategories.map(category => {
    const group = visibleRecipes.filter(recipe => recipe.category === category);
    if (!group.length) return "";
    return `
      <section class="category-section">
        <div class="section-title">
          <h3>${category}</h3><span class="section-count">${group.length} ${group.length === 1 ? "drink" : "drinks"}</span>
        </div>
        <div class="bubble-grid">
          ${group.map(recipe => `
            <button class="recipe-bubble ${activeRecipeId === recipe.id ? "selected" : ""}"
              type="button" data-recipe="${recipe.id}" aria-pressed="${activeRecipeId === recipe.id}">
              <span class="bubble-icon">${recipe.icon || "✳"}</span>
              <span><span class="bubble-name">${recipe.name}</span><span class="bubble-category">${recipe.category}</span></span>
            </button>
          `).join("")}
        </div>
      </section>`;
  }).join("");

  recipeSections.querySelectorAll("[data-recipe]").forEach(button => {
    button.addEventListener("click", () => {
      activeRecipeId = button.dataset.recipe;
      activeSize = "16oz";
      const selectedRecipe = recipes.find(item => item.id === activeRecipeId);
      activeTemperature = selectedRecipe?.temperatures?.includes("Iced") ? "Iced" : (selectedRecipe?.temperatures?.[0] || "Iced");
      selectedModifiers = {};
      Object.entries(selectedRecipe?.modifiers || {}).forEach(([key, options]) => { selectedModifiers[key] = options[0]; });
      renderRecipeSections();
      renderRecipePanel();
    });
  });
}

function renderRecipePanel() {
  const recipe = recipes.find(item => item.id === activeRecipeId);
  if (!recipe) {
    recipePanel.className = "recipe-panel empty-state";
    recipePanel.innerHTML = `<div class="empty-icon">✳</div><p class="eyebrow">RECIPE DETAILS</p><h2>Choose a drink</h2><p>Select any drink bubble to see its ingredients and preparation steps.</p>`;
    return;
  }

  const temperatures = recipe.temperatures || ["Iced"];
  if (!temperatures.includes(activeTemperature)) activeTemperature = temperatures[0];
  const modifiers = recipe.modifiers || {};
  const modifierLabels = { milk: "Milk", sweetness: "Sweetness", extras: "Add-ons" };


  const sizeRecipe = recipe.sizes[activeSize];

  let ingredients = Array.isArray(sizeRecipe)
    ? [...sizeRecipe]
    : [...(sizeRecipe?.[activeTemperature] || [])];

  let steps =
    recipe.preparation?.[activeTemperature] ||
    (activeTemperature === "Hot" && recipe.hotSteps
      ? recipe.hotSteps
      : recipe.steps || []);


  // Make the selected milk visible in the ingredient list.
  if (selectedModifiers.milk && !["No cream", "Add cream"].includes(selectedModifiers.milk)) {
    ingredients = ingredients.map(item => /milk/i.test(item.name) ? { ...item, name: selectedModifiers.milk } : item);
  }
  // Hot drinks should not list ice. For iced drinks, retain the recipe's ice quantity.
  if (activeTemperature === "Hot") ingredients = ingredients.filter(item => !/ice/i.test(item.name));

  // Apply sweetness choice to the recipe display.

  // if (selectedModifiers.sweetness) {
  //   const sweetnessAmount = selectedModifiers.sweetness === "Less sweet" ? "Half of standard amount (1 floz less for custard toppings)" :
  //     selectedModifiers.sweetness === "No added sweetener" ? "0 (omit sweetener)" : "Standard recipe amount";
  //   const sweetIndex = ingredients.findIndex(item => /syrup|sweetener|sauce/i.test(item.name));
  //   if (sweetIndex >= 0) ingredients[sweetIndex] = { ...ingredients[sweetIndex], amount: sweetnessAmount };
  //   else if (selectedModifiers.sweetness !== "Regular") ingredients.push({ name: "Sweetness adjustment", amount: sweetnessAmount });
  // }


  // Apply sweetness based on the drink's actual sweetener.
  if (selectedModifiers.sweetness) {
    const sweetness = selectedModifiers.sweetness;

    if (sweetness === "Less sweet") {
      // Reduce syrup or sauce by half when the drink uses one.
      const sweetenerIndex = ingredients.findIndex(item =>
        /syrup|sweetener|sauce/i.test(item.name)
      );

      if (sweetenerIndex >= 0) {
        const item = ingredients[sweetenerIndex];
        ingredients[sweetenerIndex] = {
          ...item,
          amount: `Half of standard amount (${item.amount})`
        };
      } else {
        // If a sweet topping is the main sweetener, reduce the topping.
        const toppingIndex = ingredients.findIndex(item =>
          /pudding|custard|topping/i.test(item.name)
        );

        if (toppingIndex >= 0) {
          const item = ingredients[toppingIndex];
          ingredients[toppingIndex] = {
            ...item,
            amount: `Reduced portion (-0.5 floz of custard)`
          };
        }
      }
    } else if (sweetness === "No added sweetener") {
      // Remove added syrup or sauce, but keep toppings.
      const sweetenerIndex = ingredients.findIndex(item =>
        /syrup|sweetener|sauce/i.test(item.name)
      );

      if (sweetenerIndex >= 0) {
        ingredients[sweetenerIndex] = {
          ...ingredients[sweetenerIndex],
          amount: "0 (omit)"
        };
      }
    }
  }


  // Apply extra topping/boba selection to the displayed ingredients.
  if (selectedModifiers.extras && !/no extra/i.test(selectedModifiers.extras)) {
    const extra = selectedModifiers.extras;
    const relatedIndex = ingredients.findIndex(item => /sago|custard|topping/i.test(item.name));
    if (relatedIndex >= 0) ingredients[relatedIndex] = { ...ingredients[relatedIndex], amount: `${ingredients[relatedIndex].amount} + extra` };
    else ingredients.push({ name: extra, amount: "Add 1/2 of the standard portion" });
  }

  recipePanel.className = "recipe-panel";
  recipePanel.innerHTML = `
    <div class="recipe-topline"><p class="eyebrow">RECIPE DETAILS</p><span class="recipe-category-tag">${recipe.category}</span></div>
    <h2 class="recipe-name">${recipe.name}</h2><p class="recipe-description">${recipe.description || ""}</p>
    <p class="size-label">CUP SIZE</p>
    <div class="size-switch" role="group" aria-label="Drink size">
      ${["12oz", "16oz", "20oz"].map(size => `<button type="button" class="size-button ${activeSize === size ? "active" : ""}" data-size="${size}" aria-pressed="${activeSize === size}">${size}</button>`).join("")}
    </div>
    <p class="size-label">TEMPERATURE</p>
    <div class="size-switch temperature-switch" role="group" aria-label="Drink temperature">
      ${temperatures.map(temp => `<button type="button" class="size-button ${activeTemperature === temp ? "active" : ""}" data-temperature="${temp}" aria-pressed="${activeTemperature === temp}">${temp}</button>`).join("")}
    </div>
    <div class="modifier-controls">
      ${Object.entries(modifiers).map(([key, options]) => `<label class="modifier-field"><span>${modifierLabels[key] || key}</span><select data-modifier="${key}">${options.map(option => `<option value="${option}" ${selectedModifiers[key] === option ? "selected" : ""}>${option}</option>`).join("")}</select></label>`).join("")}
    </div>
    <div class="recipe-stats"><span class="stat">⏱ <strong>${recipe.prepTime || "—"}</strong></span><span class="stat">Method: <strong>${activeTemperature === "Hot" ? "Hot preparation" : (recipe.method || "Iced preparation")}</strong></span></div>
    <h3 class="detail-heading">Ingredients <span></span></h3>
    <ul class="ingredient-list">${ingredients.map(item => `<li><span>${item.name}</span><span>${item.amount}</span></li>`).join("")}</ul>
    <h3 class="detail-heading">Preparation</h3><ol class="steps">${steps.map(step => `<li>${step}</li>`).join("")}</ol>
    ${recipe.note ? `<div class="recipe-note"><strong>Note:</strong> ${recipe.note}</div>` : ""}
  `;

  recipePanel.querySelectorAll("[data-size]").forEach(button => button.addEventListener("click", () => { activeSize = button.dataset.size; renderRecipePanel(); }));
  recipePanel.querySelectorAll("[data-temperature]").forEach(button => button.addEventListener("click", () => { activeTemperature = button.dataset.temperature; renderRecipePanel(); }));
  recipePanel.querySelectorAll("[data-modifier]").forEach(select => select.addEventListener("change", () => { selectedModifiers[select.dataset.modifier] = select.value; renderRecipePanel(); }));
}

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderRecipeSections();
});

renderCategoryNav();
renderRecipeSections();
renderRecipePanel();
