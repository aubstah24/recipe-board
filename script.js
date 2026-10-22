/*
  RECIPE DATA TEMPLATE
  Replace the sample drinks and ingredient quantities below with your cafe's recipes.
  Ingredient quantities are stored per size so the recipe panel changes when a size is selected.
*/
const recipes = [
  {
    id: "classic-matcha", name: "Matcha Latte", category: "Matcha", icon: "抹",
    description: "A smooth matcha latte with your choice of milk.",
    prepTime: "2–3 min", method: "Shaken / iced",
    sizes: {
      "12oz": [{ name: "Matcha powder", amount: "2 tsp" }, { name: "Water", amount: "2 oz" }, { name: "Milk", amount: "8 oz" }, { name: "Ice", amount: "As needed" }],
      "16oz": [{ name: "Matcha powder", amount: "3 tsp" }, { name: "Water", amount: "2.5 oz" }, { name: "Milk", amount: "11 oz" }, { name: "Ice", amount: "As needed" }],
      "20oz": [{ name: "Matcha powder", amount: "4 tsp" }, { name: "Water", amount: "3 oz" }, { name: "Milk", amount: "14 oz" }, { name: "Ice", amount: "As needed" }]
    },
    steps: ["Sift matcha into a mixing cup.", "Add water and whisk until smooth.", "Add milk and ice, then mix or shake until combined.", "Pour into the serving cup and serve."],
    note: "Sample recipe — adjust quantities to match your cafe's approved recipe."
  },
  {
    id: "strawberry-matcha", name: "Strawberry Matcha Latte", category: "Matcha", icon: "🍓",
    description: "Layered strawberry and matcha with creamy milk.",
    prepTime: "3 min", method: "Layered / iced",
    sizes: {
      "12oz": [{ name: "Strawberry puree", amount: "1.5 oz" }, { name: "Milk", amount: "7 oz" }, { name: "Matcha mixture", amount: "2.5 oz" }, { name: "Ice", amount: "As needed" }],
      "16oz": [{ name: "Strawberry puree", amount: "2 oz" }, { name: "Milk", amount: "9.5 oz" }, { name: "Matcha mixture", amount: "3 oz" }, { name: "Ice", amount: "As needed" }],
      "20oz": [{ name: "Strawberry puree", amount: "2.5 oz" }, { name: "Milk", amount: "12 oz" }, { name: "Matcha mixture", amount: "3.5 oz" }, { name: "Ice", amount: "As needed" }]
    },
    steps: ["Add strawberry puree to the cup.", "Fill the cup with ice.", "Pour in milk.", "Slowly top with prepared matcha to create layers."],
    note: "Sample recipe — use your standardized puree and matcha measurements."
  },
  {
    id: "vanilla-latte", name: "Vanilla Latte", category: "Lattes", icon: "☕",
    description: "Espresso, vanilla sweetness, and silky milk.",
    prepTime: "2–3 min", method: "Espresso / hot or iced",
    sizes: {
      "12oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Vanilla syrup", amount: "0.5 oz" }, { name: "Milk", amount: "8 oz (iced: to fill)" }],
      "16oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Vanilla syrup", amount: "0.75 oz" }, { name: "Milk", amount: "11 oz (iced: to fill)" }],
      "20oz": [{ name: "Espresso", amount: "3 shots" }, { name: "Vanilla syrup", amount: "1 oz" }, { name: "Milk", amount: "14 oz (iced: to fill)" }]
    },
    steps: ["Pull espresso shots.", "Add vanilla syrup and stir to combine.", "For hot drinks, steam milk and pour over espresso. For iced, add ice and cold milk.", "Finish with the cafe's standard latte presentation."],
    note: "Sample recipe — confirm espresso and syrup portions for your workflow."
  },
  {
    id: "mocha-latte", name: "Mocha Latte", category: "Lattes", icon: "🍫",
    description: "Espresso and chocolate balanced with milk.",
    prepTime: "2–3 min", method: "Espresso / hot or iced",
    sizes: {
      "12oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Chocolate sauce", amount: "0.75 oz" }, { name: "Milk", amount: "8 oz (iced: to fill)" }],
      "16oz": [{ name: "Espresso", amount: "2 shots" }, { name: "Chocolate sauce", amount: "1 oz" }, { name: "Milk", amount: "11 oz (iced: to fill)" }],
      "20oz": [{ name: "Espresso", amount: "3 shots" }, { name: "Chocolate sauce", amount: "1.25 oz" }, { name: "Milk", amount: "14 oz (iced: to fill)" }]
    },
    steps: ["Add chocolate sauce to the serving cup.", "Pull espresso and stir with the sauce.", "Add steamed milk for hot drinks, or ice and cold milk for iced drinks.", "Stir or finish with latte art as appropriate."],
    note: "Sample recipe — replace with your exact chocolate and espresso measurements."
  },
  {
    id: "big-island-vog", name: "Da Big Island Vog Latte", category: "Specialty Lattes", icon: "🌋",
    description: "A London Fog latte topped with a matcha pudding cloud.",
    prepTime: "3–4 min", method: "Layered / iced",
    sizes: {
      "12oz": [{ name: "Earl Grey syrup", amount: "0.5 oz" }, { name: "Milk", amount: "8 oz" }, { name: "Matcha pudding cloud", amount: "2 oz" }, { name: "Ice", amount: "As needed" }],
      "16oz": [{ name: "Earl Grey syrup", amount: "0.75 oz" }, { name: "Milk", amount: "10 oz" }, { name: "Matcha pudding cloud", amount: "2.5 oz" }, { name: "Ice", amount: "As needed" }],
      "20oz": [{ name: "Earl Grey syrup", amount: "1 oz" }, { name: "Milk", amount: "13 oz" }, { name: "Matcha pudding cloud", amount: "3 oz" }, { name: "Ice", amount: "As needed" }]
    },
    steps: ["Add Earl Grey syrup to the cup.", "Add ice and milk.", "Prepare the matcha pudding cloud using the cafe's topping procedure.", "Spoon or pour the cloud over the drink and serve."],
    note: "Sample quantities. Add espresso or tea concentrate here if your official build includes it."
  },
  {
    id: "matcha-nana", name: "Da Matcha-Nana Latte", category: "Specialty Lattes", icon: "🍌",
    description: "Matcha latte topped with a banana brown sugar pudding cloud.",
    prepTime: "3–4 min", method: "Layered / iced",
    sizes: {
      "12oz": [{ name: "Matcha mixture", amount: "2.5 oz" }, { name: "Milk", amount: "7 oz" }, { name: "Banana brown sugar pudding cloud", amount: "2 oz" }, { name: "Ice", amount: "As needed" }],
      "16oz": [{ name: "Matcha mixture", amount: "3 oz" }, { name: "Milk", amount: "9.5 oz" }, { name: "Banana brown sugar pudding cloud", amount: "2.5 oz" }, { name: "Ice", amount: "As needed" }],
      "20oz": [{ name: "Matcha mixture", amount: "3.5 oz" }, { name: "Milk", amount: "12 oz" }, { name: "Banana brown sugar pudding cloud", amount: "3 oz" }, { name: "Ice", amount: "As needed" }]
    },
    steps: ["Prepare matcha mixture until smooth.", "Add milk and ice to the serving cup.", "Pour in matcha.", "Top with banana brown sugar pudding cloud."],
    note: "Sample recipe — update to the exact recipe card used by your baristas."
  },
  {
    id: "thai-tea", name: "Thai Tea", category: "Teas", icon: "🫖",
    description: "Creamy Thai tea served over ice.",
    prepTime: "2 min", method: "Iced",
    sizes: {
      "12oz": [{ name: "Thai tea concentrate", amount: "4 oz" }, { name: "Milk / creamer", amount: "2 oz" }, { name: "Sweetener", amount: "To standard" }, { name: "Ice", amount: "As needed" }],
      "16oz": [{ name: "Thai tea concentrate", amount: "5 oz" }, { name: "Milk / creamer", amount: "2.5 oz" }, { name: "Sweetener", amount: "To standard" }, { name: "Ice", amount: "As needed" }],
      "20oz": [{ name: "Thai tea concentrate", amount: "6 oz" }, { name: "Milk / creamer", amount: "3 oz" }, { name: "Sweetener", amount: "To standard" }, { name: "Ice", amount: "As needed" }]
    },
    steps: ["Add tea concentrate to the cup.", "Add sweetener and milk or creamer.", "Fill with ice and stir well.", "Check color and sweetness against the cafe standard."],
    note: "Sample recipe — set concentrate and sweetener quantities to your batch recipe."
  },
  {
    id: "dragon-ade", name: "Dragon-Ade Refresher", category: "Teas", icon: "🐉",
    description: "Dragon fruit, mango puree, lemonade, and popping boba.",
    prepTime: "2 min", method: "Shaken / iced",
    sizes: {
      "12oz": [{ name: "Dragon fruit", amount: "1 oz" }, { name: "Mango puree", amount: "1 oz" }, { name: "Lemonade", amount: "6 oz" }, { name: "Popping boba", amount: "1 scoop" }, { name: "Ice", amount: "As needed" }],
      "16oz": [{ name: "Dragon fruit", amount: "1.5 oz" }, { name: "Mango puree", amount: "1.5 oz" }, { name: "Lemonade", amount: "8 oz" }, { name: "Popping boba", amount: "1 scoop" }, { name: "Ice", amount: "As needed" }],
      "20oz": [{ name: "Dragon fruit", amount: "2 oz" }, { name: "Mango puree", amount: "2 oz" }, { name: "Lemonade", amount: "10 oz" }, { name: "Popping boba", amount: "1–2 scoops" }, { name: "Ice", amount: "As needed" }]
    },
    steps: ["Add dragon fruit and mango puree to a shaker.", "Add lemonade and ice.", "Shake until well combined.", "Add popping boba to the serving cup, pour in refresher, and serve."],
    note: "Sample quantities — use your cafe's scoop size and puree pumps as the standard."
  },
  {
    id: "dirty-soda", name: "Coconut Lime Dirty Soda", category: "Dirty Sodas", icon: "🥤",
    description: "A fizzy soda with coconut and lime.",
    prepTime: "1–2 min", method: "Built / iced",
    sizes: {
      "12oz": [{ name: "Lemon-lime soda", amount: "8 oz" }, { name: "Coconut syrup", amount: "0.5 oz" }, { name: "Lime juice", amount: "0.25 oz" }, { name: "Ice", amount: "As needed" }],
      "16oz": [{ name: "Lemon-lime soda", amount: "11 oz" }, { name: "Coconut syrup", amount: "0.75 oz" }, { name: "Lime juice", amount: "0.5 oz" }, { name: "Ice", amount: "As needed" }],
      "20oz": [{ name: "Lemon-lime soda", amount: "14 oz" }, { name: "Coconut syrup", amount: "1 oz" }, { name: "Lime juice", amount: "0.5 oz" }, { name: "Ice", amount: "As needed" }]
    },
    steps: ["Fill the cup with ice.", "Add coconut syrup and lime juice.", "Slowly pour in soda.", "Gently stir and serve."],
    note: "Example dirty soda — replace or duplicate this recipe for your cafe's actual menu."
  }
 ];

// Defaults for optional temperature and ingredient modifiers. Customize per drink as needed.
recipes.forEach(recipe => {
  if (!recipe.temperatures) {
    recipe.temperatures = ["Matcha", "Lattes", "Specialty Lattes"].includes(recipe.category) ? ["Hot", "Iced"] : ["Iced"];
  }
  if (!recipe.modifiers) {
    recipe.modifiers = {
      milk: ["Whole milk", "Oat milk", "Soy milk"],
      sweetness: ["Regular", "Half sweet", "No added sweetener"],
      extras: recipe.category === "Teas" ? ["No extra topping", "Extra boba"] : ["No extra topping", "Extra topping"]
    };
  }
  if (!recipe.hotSteps && recipe.temperatures.includes("Hot")) {
    recipe.hotSteps = [
      "Prepare the drink base according to the ingredient list, leaving out ice.",
      "Steam the selected milk if the recipe contains milk.",
      "Combine the ingredients in the serving cup and stir until evenly mixed.",
      "Check the finished drink against the cafe's standard before serving."
    ];
  }
});

const categories = ["All", "Matcha", "Lattes", "Specialty Lattes", "Teas", "Dirty Sodas"];
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
  let ingredients = [...(recipe.sizes[activeSize] || [])];
  let steps = activeTemperature === "Hot" && recipe.hotSteps ? recipe.hotSteps : [...(recipe.steps || [])];

  // Make the selected milk visible in the ingredient list.
  if (selectedModifiers.milk && !["No cream", "Add cream"].includes(selectedModifiers.milk)) {
    ingredients = ingredients.map(item => /milk/i.test(item.name) ? { ...item, name: selectedModifiers.milk } : item);
  }
  // Hot drinks should not list ice. For iced drinks, retain the recipe's ice quantity.
  if (activeTemperature === "Hot") ingredients = ingredients.filter(item => !/ice/i.test(item.name));
  // Apply sweetness choice to the recipe display.
  if (selectedModifiers.sweetness) {
    const sweetnessAmount = selectedModifiers.sweetness === "Half sweet" ? "Half of standard amount" :
      selectedModifiers.sweetness === "No added sweetener" ? "0 (omit sweetener)" : "Standard recipe amount";
    const sweetIndex = ingredients.findIndex(item => /syrup|sweetener|sauce/i.test(item.name));
    if (sweetIndex >= 0) ingredients[sweetIndex] = { ...ingredients[sweetIndex], amount: sweetnessAmount };
    else if (selectedModifiers.sweetness !== "Regular") ingredients.push({ name: "Sweetness adjustment", amount: sweetnessAmount });
  }
  // Apply extra topping/boba selection to the displayed ingredients.
  if (selectedModifiers.extras && !/no extra/i.test(selectedModifiers.extras)) {
    const extra = selectedModifiers.extras;
    const relatedIndex = ingredients.findIndex(item => /boba|pudding cloud|topping/i.test(item.name));
    if (relatedIndex >= 0) ingredients[relatedIndex] = { ...ingredients[relatedIndex], amount: `${ingredients[relatedIndex].amount} + extra` };
    else ingredients.push({ name: extra, amount: "Add one standard portion" });
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
