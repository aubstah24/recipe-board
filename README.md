# Da Morning Grind — Drink Recipe Book Template

A static website template built with plain HTML, CSS, and JavaScript. No server, database, build step, or framework is required.

## Run it
1. Download and unzip the folder.
2. Open `index.html` in a modern browser.

## Customize your recipes
Open `script.js` and edit the `recipes` array near the top. Each drink has:
- `name`, `category`, `icon`, and `description`
- `sizes` with separate ingredient amounts for `"12oz"`, `"16oz"`, and `"20oz"`
- `steps`, `prepTime`, `method`, and an optional `note`

Use these exact category names to keep the category navigation organized:
- `Matcha`
- `Lattes`
- `Specialty Lattes`
- `Teas`
- `Dirty Sodas`

To add a drink, copy one recipe object in the array, change its `id` to a unique value, update its details, and add a comma between objects.

## Important
The included recipes are examples to demonstrate the layout and size-switching behavior. They are not verified production recipes. Replace the sample quantities and instructions with your cafe's approved recipe measurements before using this for staff training.

## Design
- Rounded-square drink bubbles grouped by category
- Search field and category filters
- Recipe detail panel with 12oz / 16oz / 20oz buttons
- Responsive layout for desktop, tablet, and phone


## Temperature and modifiers
The recipe panel includes Hot/Iced controls for matcha, lattes, and specialty lattes, plus selectable milk, sweetness, and add-ons. Iced-only recipes show only Iced. Selections update the displayed ingredient list; for best accuracy, edit each recipe's `temperatures`, `modifiers`, `sizes`, and `hotSteps`/`steps` to match your official build. The sample hot steps are generic placeholders and should be replaced with your approved preparation instructions. Modifier adjustments are display guidance rather than automatic cost or recipe calculations.
