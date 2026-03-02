export const recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        emoji: "🍝",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Italian",
        cookTime: 25,
        difficulty: "Medium",
        dietary: [],
        description: "A classic Roman pasta dish with eggs, cheese, pancetta, and black pepper. Creamy without any cream!",
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano, grated",
            "50g Parmesan, grated",
            "2 cloves garlic",
            "Salt and black pepper to taste"
        ],
        steps: [
            "Cook spaghetti in salted boiling water until al dente.",
            "Fry pancetta with garlic in a pan until crispy. Remove garlic.",
            "Whisk eggs with grated cheese and black pepper in a bowl.",
            "Drain pasta, reserving 1 cup of pasta water.",
            "Remove pan from heat, add pasta and toss with pancetta.",
            "Pour egg mixture over pasta, tossing quickly and adding pasta water to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper."
        ]
    },
    {
        id: 2,
        name: "Avocado Toast",
        emoji: "🥑",
        image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "American",
        cookTime: 10,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Vegan"],
        description: "Simple, nutritious, and infinitely customizable. A modern breakfast staple loaded with healthy fats.",
        ingredients: [
            "2 slices sourdough bread",
            "1 ripe avocado",
            "1 lemon, juiced",
            "Red pepper flakes",
            "Salt and pepper",
            "Optional: poached egg, cherry tomatoes, microgreens"
        ],
        steps: [
            "Toast bread to your desired crispiness.",
            "Halve and pit the avocado, scoop flesh into a bowl.",
            "Mash with lemon juice, salt, and pepper.",
            "Spread generously onto toast.",
            "Top with red pepper flakes and any optional toppings.",
            "Serve immediately."
        ]
    },
    {
        id: 3,
        name: "Chicken Tikka Masala",
        emoji: "🍛",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Indian",
        cookTime: 45,
        difficulty: "Medium",
        dietary: ["Gluten-Free"],
        description: "Tender chicken in a richly spiced tomato-cream sauce. One of the most beloved curry dishes worldwide.",
        ingredients: [
            "800g boneless chicken thighs, cubed",
            "400ml coconut cream",
            "400g canned tomatoes",
            "2 onions, diced",
            "4 cloves garlic",
            "1 tbsp ginger, grated",
            "2 tbsp tikka masala paste",
            "1 tsp turmeric",
            "1 tsp garam masala",
            "Fresh coriander to garnish"
        ],
        steps: [
            "Marinate chicken in tikka paste and yogurt for 30 minutes.",
            "Grill or pan-fry chicken until slightly charred. Set aside.",
            "Sauté onions until golden. Add garlic and ginger.",
            "Add spices, cook 1 minute. Add tomatoes, simmer 10 minutes.",
            "Stir in coconut cream, add chicken back in.",
            "Simmer 15 minutes until sauce thickens.",
            "Garnish with coriander. Serve with basmati rice or naan."
        ]
    },
    {
        id: 4,
        name: "Veggie Stir Fry",
        emoji: "🥦",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Asian",
        cookTime: 20,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
        description: "A vibrant, quick stir fry packed with colorful vegetables in a savory garlic-soy sauce.",
        ingredients: [
            "2 cups broccoli florets",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup snap peas",
            "3 cloves garlic, minced",
            "2 tbsp soy sauce (or tamari for GF)",
            "1 tbsp sesame oil",
            "1 tsp cornstarch",
            "Sesame seeds to garnish"
        ],
        steps: [
            "Mix soy sauce, sesame oil, and cornstarch in a small bowl.",
            "Heat wok or pan on high heat with neutral oil.",
            "Add garlic, stir fry 30 seconds.",
            "Add hard vegetables (carrot, broccoli) first, stir fry 3 minutes.",
            "Add bell pepper and snap peas, stir fry 2 more minutes.",
            "Pour sauce over vegetables, toss until coated and glossy.",
            "Serve over rice, garnished with sesame seeds."
        ]
    },
    {
        id: 5,
        name: "Tacos Al Pastor",
        emoji: "🌮",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Mexican",
        cookTime: 30,
        difficulty: "Medium",
        dietary: ["Gluten-Free"],
        description: "Juicy marinated pork with pineapple, served in warm corn tortillas with cilantro and onion.",
        ingredients: [
            "600g pork shoulder, thin sliced",
            "Corn tortillas",
            "1 cup pineapple chunks",
            "1/2 white onion, diced",
            "Fresh cilantro",
            "3 chipotle peppers in adobo",
            "1 tsp cumin",
            "1 tsp oregano",
            "2 limes",
            "Salt to taste"
        ],
        steps: [
            "Blend chipotle, cumin, oregano, lime juice, and salt into marinade.",
            "Coat pork slices in marinade, rest 20 minutes.",
            "Cook pork in a hot pan until charred and cooked through.",
            "Add pineapple chunks to pan, caramelize slightly.",
            "Warm tortillas on a hot dry pan.",
            "Assemble tacos with pork, pineapple, onion, and cilantro.",
            "Serve with lime wedges."
        ]
    },
    {
        id: 6,
        name: "Greek Salad",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Mediterranean",
        cookTime: 10,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Gluten-Free"],
        description: "A refreshing classic with tomatoes, cucumber, olives, and feta — no lettuce needed!",
        ingredients: [
            "3 tomatoes, chopped",
            "1 cucumber, sliced",
            "1/2 red onion, thinly sliced",
            "150g feta cheese, cubed",
            "100g Kalamata olives",
            "3 tbsp extra virgin olive oil",
            "1 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "Salt and pepper"
        ],
        steps: [
            "Combine tomatoes, cucumber, and red onion in a large bowl.",
            "Add olives and feta cubes on top.",
            "Whisk olive oil, vinegar, oregano, salt, and pepper.",
            "Drizzle dressing over salad.",
            "Toss gently to combine.",
            "Serve immediately or chill for 15 minutes."
        ]
    },
    {
        id: 7,
        name: "Banana Pancakes",
        emoji: "🥞",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "American",
        cookTime: 20,
        difficulty: "Easy",
        dietary: ["Vegetarian"],
        description: "Fluffy, golden pancakes with real banana flavor. A comforting weekend breakfast the whole family loves.",
        ingredients: [
            "2 ripe bananas",
            "2 eggs",
            "1 cup flour",
            "1 cup milk",
            "2 tsp baking powder",
            "1 tbsp sugar",
            "Pinch of salt",
            "Butter for cooking",
            "Maple syrup to serve"
        ],
        steps: [
            "Mash bananas in a large bowl.",
            "Whisk in eggs and milk.",
            "Add flour, baking powder, sugar, and salt. Stir until just combined (lumps are fine).",
            "Heat pan over medium heat, add butter.",
            "Pour 1/4 cup batter per pancake. Cook until bubbles form, flip.",
            "Cook another 1-2 minutes until golden.",
            "Serve with maple syrup and sliced bananas."
        ]
    },
    {
        id: 8,
        name: "Miso Ramen",
        emoji: "🍜",
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Asian",
        cookTime: 35,
        difficulty: "Medium",
        dietary: [],
        description: "A warming, umami-rich noodle soup with a miso-based broth, soft-boiled egg, and tender toppings.",
        ingredients: [
            "400g ramen noodles",
            "3 tbsp white miso paste",
            "1L chicken or vegetable broth",
            "2 soft-boiled eggs",
            "200g chashu pork or tofu",
            "Corn, nori, spring onion, bamboo shoots",
            "1 tbsp soy sauce",
            "1 tsp sesame oil",
            "2 cloves garlic, minced",
            "1 tsp ginger, grated"
        ],
        steps: [
            "Sauté garlic and ginger in sesame oil.",
            "Add broth and bring to simmer.",
            "Dissolve miso paste in a ladle of broth, stir back into pot.",
            "Add soy sauce, taste and adjust seasoning.",
            "Cook noodles separately, drain.",
            "Divide noodles into bowls, ladle broth over.",
            "Top with egg halves, pork/tofu, corn, nori, and spring onion."
        ]
    },
    {
        id: 9,
        name: "Hummus & Pita",
        emoji: "🫓",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Mediterranean",
        cookTime: 15,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Vegan"],
        description: "Silky smooth homemade hummus with warm pita — much better than store-bought!",
        ingredients: [
            "400g canned chickpeas",
            "3 tbsp tahini",
            "2 lemons, juiced",
            "2 cloves garlic",
            "3 tbsp olive oil",
            "Salt to taste",
            "Paprika and parsley to garnish",
            "Pita bread"
        ],
        steps: [
            "Drain chickpeas, reserving liquid (aquafaba).",
            "Blend chickpeas, tahini, lemon juice, and garlic until smooth.",
            "Add olive oil and aquafaba to reach desired consistency.",
            "Season with salt and blend again.",
            "Spread in bowls, drizzle with olive oil, sprinkle paprika.",
            "Warm pita bread and serve alongside."
        ]
    },
    {
        id: 10,
        name: "Beef Burger",
        emoji: "🍔",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "American",
        cookTime: 20,
        difficulty: "Easy",
        dietary: [],
        description: "A juicy, thick beef patty with all the classic toppings — the ultimate comfort food.",
        ingredients: [
            "500g ground beef (80/20 fat ratio)",
            "4 burger buns",
            "4 slices cheddar cheese",
            "Lettuce, tomato, onion",
            "Pickles",
            "Ketchup, mustard, mayo",
            "Salt and pepper"
        ],
        steps: [
            "Season beef with salt and pepper, form into 4 patties.",
            "Make a thumb indent in center of each patty.",
            "Cook on hot grill or pan 3-4 minutes per side.",
            "Add cheese in last minute of cooking.",
            "Toast buns cut-side down until golden.",
            "Assemble with desired condiments and toppings.",
            "Serve immediately."
        ]
    },
    {
        id: 11,
        name: "Margherita Pizza",
        emoji: "🍕",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Italian",
        cookTime: 25,
        difficulty: "Medium",
        dietary: ["Vegetarian"],
        description: "The queen of pizzas — simple tomato, fresh mozzarella, and basil on a crispy hand-stretched crust.",
        ingredients: [
            "Pizza dough (store-bought or homemade)",
            "150ml tomato passata",
            "200g fresh mozzarella",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt and black pepper",
            "Semolina for dusting"
        ],
        steps: [
            "Preheat oven to maximum temperature (250°C/480°F) with pizza stone or tray inside.",
            "Stretch dough to 30cm circle on semolina-dusted surface.",
            "Spread passata, leaving 2cm border. Season.",
            "Tear mozzarella over the top.",
            "Slide onto hot stone/tray, bake 10-12 minutes until crust is charred.",
            "Remove from oven, add fresh basil and drizzle with olive oil.",
            "Slice and serve immediately."
        ]
    },
    {
        id: 12,
        name: "Mango Smoothie Bowl",
        emoji: "🥭",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Asian",
        cookTime: 5,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
        description: "A thick, creamy frozen mango base topped with fresh fruit, granola, and coconut flakes.",
        ingredients: [
            "2 frozen mangoes",
            "1/2 cup coconut milk",
            "Toppings: fresh mango, kiwi, berries",
            "Granola",
            "Coconut flakes",
            "Chia seeds",
            "Honey or agave syrup"
        ],
        steps: [
            "Blend frozen mango with coconut milk until thick and smooth.",
            "Pour into a wide bowl.",
            "Arrange toppings in sections for a beautiful presentation.",
            "Drizzle with honey or agave.",
            "Serve immediately."
        ]
    },
    {
        id: 13,
        name: "Dal Tadka",
        emoji: "🫘",
        image: "https://images.unsplash.com/photo-1546549032-9759fbb8823c?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Indian",
        cookTime: 30,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
        description: "Comforting yellow lentils tempered with aromatic spices. A staple across Indian households.",
        ingredients: [
            "1 cup yellow split dal (toor dal)",
            "1 tomato, chopped",
            "1 onion, diced",
            "3 cloves garlic",
            "1 tsp cumin seeds",
            "1 tsp turmeric",
            "1 tsp chili powder",
            "Fresh coriander",
            "2 tbsp ghee or oil"
        ],
        steps: [
            "Wash dal and pressure cook with turmeric and water until soft.",
            "Heat ghee in a pan, add cumin seeds until they splutter.",
            "Add onion, cook until golden. Add garlic.",
            "Add tomato and spices, cook until oil separates.",
            "Pour tadka over cooked dal, stir to combine.",
            "Simmer 5 minutes, adjust seasoning.",
            "Garnish with coriander. Serve with rice or roti."
        ]
    },
    {
        id: 14,
        name: "Caesar Salad",
        emoji: "🥬",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "American",
        cookTime: 15,
        difficulty: "Easy",
        dietary: ["Vegetarian"],
        description: "Crisp romaine with creamy Caesar dressing, parmesan, and golden croutons.",
        ingredients: [
            "1 head romaine lettuce",
            "50g parmesan, shaved",
            "1 cup croutons",
            "1 egg yolk",
            "2 tsp Worcestershire sauce",
            "1 tsp Dijon mustard",
            "2 cloves garlic",
            "Lemon juice, olive oil",
            "Salt and pepper"
        ],
        steps: [
            "Whisk egg yolk, mustard, garlic, and Worcestershire.",
            "Slowly drizzle in olive oil, whisking continuously to emulsify.",
            "Add lemon juice, salt and pepper. Adjust to taste.",
            "Tear romaine into a large bowl.",
            "Toss with dressing until well coated.",
            "Top with croutons and shaved parmesan.",
            "Serve immediately."
        ]
    },
    {
        id: 15,
        name: "Shakshuka",
        emoji: "🍳",
        image: "https://images.unsplash.com/photo-1598511757337-fe2cafc31ba6?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Mediterranean",
        cookTime: 25,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Gluten-Free"],
        description: "Eggs poached in a spiced tomato and pepper sauce. A showstopper brunch dish from North Africa.",
        ingredients: [
            "4 eggs",
            "400g canned tomatoes",
            "2 red bell peppers",
            "1 onion",
            "3 cloves garlic",
            "1 tsp cumin",
            "1 tsp paprika",
            "1/2 tsp chili flakes",
            "Fresh parsley",
            "Feta cheese (optional)"
        ],
        steps: [
            "Sauté onion and peppers until softened.",
            "Add garlic and spices, cook 1 minute.",
            "Add canned tomatoes, crush slightly. Simmer 10 minutes.",
            "Make 4 wells in the sauce, crack an egg into each.",
            "Cover and cook 5-7 minutes until whites are set but yolks are runny.",
            "Top with parsley and crumbled feta if using.",
            "Serve directly from pan with crusty bread."
        ]
    },
    {
        id: 16,
        name: "Pad Thai",
        emoji: "🍜",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Asian",
        cookTime: 20,
        difficulty: "Medium",
        dietary: ["Gluten-Free"],
        description: "Thailand's iconic stir-fried noodles with tamarind, fish sauce, peanuts, and lime.",
        ingredients: [
            "200g rice noodles",
            "200g shrimp or chicken",
            "2 eggs",
            "3 tbsp tamarind paste",
            "2 tbsp fish sauce",
            "1 tbsp palm sugar",
            "100g bean sprouts",
            "Spring onions, peanuts, lime, chili"
        ],
        steps: [
            "Soak noodles in warm water until pliable, drain.",
            "Mix tamarind, fish sauce, and sugar for sauce.",
            "Cook shrimp/chicken in hot wok, set aside.",
            "Add noodles, toss with sauce.",
            "Push aside, scramble eggs, then mix in.",
            "Return protein, add bean sprouts, toss.",
            "Plate and top with peanuts, spring onion, and lime wedge."
        ]
    },
    {
        id: 17,
        name: "Guacamole",
        emoji: "🫑",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Mexican",
        cookTime: 10,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
        description: "Fresh, chunky guacamole made the traditional way. Better than anything from a jar!",
        ingredients: [
            "3 ripe avocados",
            "1 lime, juiced",
            "1/2 red onion, minced",
            "2 tomatoes, deseeded and diced",
            "1 jalapeño, finely diced",
            "Fresh cilantro",
            "Salt to taste"
        ],
        steps: [
            "Halve and pit avocados, scoop into bowl.",
            "Mash with a fork to desired texture.",
            "Add lime juice immediately to prevent browning.",
            "Fold in onion, tomato, jalapeño, and cilantro.",
            "Season generously with salt.",
            "Taste and adjust lime or salt.",
            "Serve immediately with tortilla chips."
        ]
    },
    {
        id: 18,
        name: "Lemon Herb Salmon",
        emoji: "🐟",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Mediterranean",
        cookTime: 20,
        difficulty: "Easy",
        dietary: ["Gluten-Free"],
        description: "Pan-seared salmon with a bright lemon herb butter sauce. Elegant and ready in 20 minutes.",
        ingredients: [
            "4 salmon fillets",
            "2 lemons",
            "3 tbsp butter",
            "3 cloves garlic, minced",
            "Fresh dill and parsley",
            "Salt and pepper",
            "Olive oil"
        ],
        steps: [
            "Pat salmon dry and season well with salt and pepper.",
            "Heat olive oil in pan over high heat.",
            "Cook salmon skin-side down 4 minutes until skin is crispy.",
            "Flip and cook 2-3 more minutes.",
            "Reduce heat, add butter and garlic to pan.",
            "Baste salmon with melted butter.",
            "Squeeze lemon over, garnish with herbs and serve."
        ]
    },
    {
        id: 19,
        name: "Chocolate Lava Cake",
        emoji: "🍫",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "French",
        cookTime: 20,
        difficulty: "Medium",
        dietary: ["Vegetarian"],
        description: "Decadent warm chocolate cakes with a gooey molten centre. The ultimate dinner party dessert.",
        ingredients: [
            "200g dark chocolate",
            "100g butter",
            "2 eggs",
            "2 egg yolks",
            "100g sugar",
            "60g flour",
            "Pinch of salt",
            "Cocoa powder for dusting",
            "Vanilla ice cream to serve"
        ],
        steps: [
            "Preheat oven to 200°C. Butter and cocoa-dust 4 ramekins.",
            "Melt chocolate and butter together.",
            "Whisk eggs, yolks, and sugar until thick and pale.",
            "Fold in chocolate mixture.",
            "Sift in flour and salt, fold gently.",
            "Fill ramekins 3/4 full, bake 10-12 minutes.",
            "Run knife around edge, invert onto plate. Serve immediately with ice cream."
        ]
    },
    {
        id: 20,
        name: "Veggie Quesadillas",
        emoji: "🫔",
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "Mexican",
        cookTime: 15,
        difficulty: "Easy",
        dietary: ["Vegetarian"],
        description: "Crispy flour tortillas stuffed with melted cheese and colorful roasted vegetables.",
        ingredients: [
            "4 large flour tortillas",
            "200g cheddar or Monterey Jack, grated",
            "1 red bell pepper, sliced",
            "1 yellow bell pepper, sliced",
            "1/2 red onion, sliced",
            "1 cup black beans",
            "1 tsp cumin",
            "Sour cream and salsa to serve"
        ],
        steps: [
            "Sauté peppers and onion with cumin until soft.",
            "Add black beans, heat through.",
            "Heat a large pan over medium heat.",
            "Place tortilla in pan, add cheese on half.",
            "Top with vegetable filling, fold tortilla over.",
            "Cook 2-3 minutes per side until golden and crispy.",
            "Cut into wedges, serve with sour cream and salsa."
        ]
    },

    // ===== AFRICAN CUISINE =====
    {
        id: 21,
        name: "Jollof Rice",
        emoji: "🍚",
        image: "https://images.unsplash.com/photo-1674143679547-c6e3d6d7df73?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "African",
        cookTime: 50,
        difficulty: "Medium",
        dietary: ["Gluten-Free"],
        description: "West Africa's most celebrated rice dish — smoky, spiced, and cooked in a rich tomato base. A party staple from Nigeria to Ghana.",
        ingredients: [
            "3 cups long grain parboiled rice",
            "400g canned tomatoes",
            "3 red bell peppers",
            "2 scotch bonnet peppers",
            "1 large onion",
            "3 tbsp tomato paste",
            "500ml chicken stock",
            "1 tsp thyme",
            "1 tsp curry powder",
            "Bay leaves, salt, pepper",
            "3 tbsp vegetable oil"
        ],
        steps: [
            "Blend tomatoes, bell peppers, scotch bonnet, and half the onion into a smooth purée.",
            "Fry diced onion in oil until translucent. Add tomato paste, cook 3 minutes.",
            "Add blended tomato purée, fry on medium heat 15–20 minutes to reduce.",
            "Add chicken stock, thyme, curry powder, bay leaves, salt and pepper.",
            "Wash rice and add to the pot. Stir to coat, then cover tightly.",
            "Cook on low heat 30 minutes, stirring halfway. The bottom 'party crust' is the prize!",
            "Serve with fried plantain, chicken, or beef."
        ]
    },
    {
        id: 22,
        name: "Nyama Choma",
        emoji: "🥩",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "African",
        cookTime: 60,
        difficulty: "Medium",
        dietary: ["Gluten-Free"],
        description: "Kenya's legendary slow-grilled meat — marinated goat or beef, roasted over charcoal until perfectly charred and smoky. Best enjoyed with kachumbari.",
        ingredients: [
            "1.5kg goat meat or beef ribs, bone-in",
            "2 tsp salt",
            "1 tsp black pepper",
            "1 tsp garlic powder",
            "Kachumbari: 2 tomatoes, 1 red onion, 1 cucumber",
            "1 green chili, lemon juice",
            "Fresh coriander",
            "Ugali or bread to serve"
        ],
        steps: [
            "Rub meat generously with salt, pepper, and garlic powder.",
            "Let marinate for at least 1 hour (overnight is better).",
            "Prepare charcoal grill to medium-high heat.",
            "Grill meat slowly, turning every 10–15 minutes for even charring.",
            "Cook for 45–60 minutes until tender and cooked through.",
            "For kachumbari: dice tomatoes, onion, cucumber, mix with chili, lemon, and coriander.",
            "Serve nyama choma hot with kachumbari and ugali."
        ]
    },
    {
        id: 23,
        name: "Ugali & Sukuma Wiki",
        emoji: "🌽",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "African",
        cookTime: 30,
        difficulty: "Easy",
        dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
        description: "Kenya's national dish — stiff maize flour porridge served with braised kale (sukuma wiki). Simple, filling, and beloved by millions.",
        ingredients: [
            "2 cups maize flour (unga wa mahindi)",
            "4 cups water",
            "Salt to taste",
            "Sukuma Wiki: 1 bunch kale, shredded",
            "1 large tomato, diced",
            "1 onion, diced",
            "2 cloves garlic",
            "2 tbsp cooking oil"
        ],
        steps: [
            "Boil salted water in a heavy pot.",
            "Gradually add maize flour, stirring constantly to avoid lumps.",
            "Reduce heat, continue stirring vigorously until very thick and pulls from sides.",
            "Cover and cook 5 more minutes on low heat.",
            "For sukuma: sauté onion and garlic in oil until golden.",
            "Add tomatoes, cook 5 minutes. Add kale, stir fry 5 minutes until wilted.",
            "Serve ugali shaped into portions alongside sukuma wiki."
        ]
    },
    {
        id: 24,
        name: "Pilau Rice",
        emoji: "🫙",
        image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "African",
        cookTime: 45,
        difficulty: "Medium",
        dietary: ["Gluten-Free"],
        description: "East Africa's aromatic spiced rice, deeply flavored with pilau masala, meat, and caramelized onions. A Swahili coast classic.",
        ingredients: [
            "3 cups basmati rice",
            "500g beef or chicken, cubed",
            "2 large onions, thinly sliced",
            "3 tbsp pilau masala",
            "1 tsp cumin seeds",
            "4 cardamom pods",
            "4 cloves garlic, minced",
            "2 tbsp ginger, grated",
            "4 tbsp cooking oil",
            "Salt and pepper"
        ],
        steps: [
            "Fry onions in oil on medium-low heat until deep golden brown (30 min) — this is the key step.",
            "Add garlic, ginger, cumin seeds, and cardamom. Stir 2 minutes.",
            "Add meat, brown on all sides.",
            "Add pilau masala and cook 3 minutes.",
            "Add water twice the volume of rice, season with salt. Bring to boil.",
            "Add washed rice, stir once, cover tightly.",
            "Cook on low heat 20 minutes. Serve with kachumbari and raita."
        ]
    },
    {
        id: 25,
        name: "Injera & Tibs",
        emoji: "🫓",
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "African",
        cookTime: 40,
        difficulty: "Medium",
        dietary: ["Gluten-Free"],
        description: "Ethiopia's iconic sourdough flatbread paired with sautéed spiced beef (tibs) in berbere sauce. Eaten communally with your hands.",
        ingredients: [
            "Injera (store-bought or fermented teff flour)",
            "500g beef, thin strips",
            "2 onions, sliced",
            "3 tbsp berbere spice paste",
            "4 cloves garlic",
            "1 tbsp ginger",
            "2 tbsp clarified butter (niter kibbeh)",
            "Fresh jalapeño",
            "Salt to taste"
        ],
        steps: [
            "Heat clarified butter in a pan, fry onions until caramelized.",
            "Add garlic, ginger, and jalapeño. Stir 2 minutes.",
            "Add berbere paste, cook 3 minutes until fragrant.",
            "Add beef strips, cook on high heat until browned and slightly crispy edges.",
            "Season with salt, add splash of water if too dry.",
            "Lay injera flat on a large platter.",
            "Spoon tibs onto injera. Tear off pieces of injera to scoop — no cutlery!"
        ]
    },
    {
        id: 26,
        name: "Piri Piri Chicken",
        emoji: "🔥",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=500&h=340&fit=crop&auto=format&q=80",
        cuisine: "African",
        cookTime: 55,
        difficulty: "Medium",
        dietary: ["Gluten-Free"],
        description: "Mozambique's famous fiery grilled chicken marinated in a piri piri chili sauce. Bold, smoky, and absolutely unforgettable.",
        ingredients: [
            "1 whole chicken, butterflied",
            "10 piri piri chilies (or bird's eye chilies)",
            "4 cloves garlic",
            "3 tbsp olive oil",
            "2 lemons, juiced",
            "1 tbsp paprika",
            "1 tbsp oregano",
            "Salt and pepper",
            "Fresh parsley to garnish"
        ],
        steps: [
            "Blend chilies, garlic, olive oil, lemon juice, paprika, oregano, salt and pepper into marinade.",
            "Score chicken deeply and rub marinade all over, into every cut.",
            "Marinate at minimum 2 hours (overnight is best).",
            "Grill on medium-high heat bone-side down for 20 minutes.",
            "Flip and cook skin-side down 15 minutes until charred.",
            "Rest 10 minutes before cutting.",
            "Garnish with parsley, serve with chips and lemon wedges."
        ]
    }
];

export const cuisines = ["All", "Italian", "American", "Indian", "Asian", "Mexican", "Mediterranean", "African", "French"];
export const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free"];
