export const recipe_info = [
	{
		_id: 1,
		slug: 'classic-margherita-pizza',
		DishName: "Classic Margherita Pizza",
		Description: "Classic Margherita pizza is a classic because it's so easy to make and with only two ingredients, you want to make sure they are the best!",
		PrepTime: "20 mins",
		CookTime: "15 mins",
		Servings: 4,
		Author: {
			id: 23,
			UserName: "Chef Maria Romano"
		},
		Image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=1200&h=800&q=80",
		SocialLinks: [
			{
				_id: 1,
				name: "Youtube",
				url: "https://youtu.be/dQw4w9WgXcQ?si=pI8YVAM5LfReUcgD"
			}
		],
		Cuisine: {
			_id: 4,
			CuisineName: "Italian",
		},
		Category: {
			_id: 2,
			CategoryName: "Pizza"
		},
		Type: {
			_id: 1,
			CategoryName: "Veg"
		},
		Ingredients: [
			"1 large store-bought, ready-made plain pizza base",
			"¾ cup pizza sauce",
			"1 2/3 cups (150 g) Perfect Italiano™ Perfect Pizza cheese",
			"Handful of cherry tomatoes, sliced",
			"Basil leaves, optional, to serve"
		],
		Steps: [
			{
				StepNo: 1,
				Description: "Preheat oven to 230°C / 210°C fan-forced. Line a baking tray or pizza tray with baking paper."
			},
			{
				StepNo: 2,
				Description: "Place pizza base on lined tray. Spread with the pizza sauce. Scatter with a small handful of Pizza cheese. Top with tomato slices and scatter over the remaining cheese."
			},
			{
				StepNo: 3,
				Description: "Bake for 10-15 minutes or until cheese is melted and golden and base is crisp. Serve with basil leaves if you like."
			}
		],
		Tips: [
			"This pizza recipe also works well with Perfect Italiano Mozzarella."
		],
		NutritionalInfo: [
			{
				_id: 1,
				index: "Calories",
				quantity: 320,
				unit: "cal",
			},
			{
				_id: 2,
				index: "Fats",
				quantity: 12.2,
				unit: "g"
			},
			{
				_id: 3,
				index: "Carbohydrates",
				quantity: 76,
				unit: "g"
			},
			{
				_id: 4,
				index: "Protein",
				quantity: 28,
				unit: "g"
			}
		],
	},
	{
		id: 2,
		slug: 'thai-green-curry',
		DishName: "Thai Green Curry",
		Description: "This Green Thai Curry sauce is made with authentic Asian spices making this chicken dinner not only delicious but ready in 30 minutes too. Cook Passage to Asia Green Curry sauce with chicken and your favourite Asian greens, then serve with rice and some lime wedges on the side",
		PrepTime: "25 mins",
		CookTime: "30 mins",
		Servings: 6,
		Author: {
			id: 22,
			UserName: "Chef Sam Thompson"
		},
		Image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&h=800&q=80",
		SocialLinks: [
			{
				_id: 1,
				name: "Youtube",
				url: "https://youtu.be/dQw4w9WgXcQ?si=pI8YVAM5LfReUcgD"
			}
		],
		Cuisine: {
			_id: 12,
			CuisineName: "Thai",
		},
		Category: {
			_id: 2,
			CategoryName: "Salad"
		},
		Type: {
			_id: 2,
			CategoryName: "Non-Veg"
		},
		Ingredients: [
			"2 tablespoons vegetable oil",
			"500g chicken thigh fillets, diced",
			"1 brown onion, chopped",
			"200g Passage to Asia Thai Green Curry",
			"400g can coconut milk",
			"1 bunch broccolini, trimmed, cut into 3cm pieces",
			"1 bunch Chinese broccoli, cut into 4cm pieces",
			"4 green onions, thinly sliced diagonally",
			"Steamed Jasmine rice, to serve",
			"Thai basil sprigs, to serve",
			"Sliced long red chilli, to serve",
			"Lime wedges, to serve"
		],
		Steps: [
			{
				StepNo: 1,
				Description: "Heat 1 tablespoon oil in a large non-stick frying pan over medium high heat. Add chicken and cook for 5 minutes or until browned on all sides. Transfer to a bowl."
			},
			{
				StepNo: 2,
				Description: "Heat remaining oil in frying pan. Add onion and cook for 5 minutes or until softened. Add Passage to Asia Thai Green Curry and coconut milk and bring to the boil. Return chicken to pan with broccolini. Reduce heat and simmer for 8 minutes or until cooked through. Stir in Chinese broccoli and half the green onion."
			},
			{
				StepNo: 3,
				Description: "Spoon rice into bowls and top generously with the curry. Scatter with basil, chilli and remaining green onion. Serve with lime wedges on the side."
			}
		],
		Tips: [
			"You can also use this same Thai Green Curry sauce to make a wonderful Salmon Curry that's filled with family friendly veggies."
		],
		NutritionalInfo: [
		]
	},
	{
		id: 3,
		slug: 'mediterranean-salad',
		DishName: "Mediterranean Salad",
		Description: "",
		PrepTime: "15 mins",
		CookTime: "0 mins",
		Servings: 2,
		Author: {
			id: 22,
			UserName: "Chef Sam Thompson"
		},
		Image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&h=800&q=80",
		SocialLinks: [
			{
				_id: 1,
				name: "Youtube",
				url: "https://youtu.be/dQw4w9WgXcQ?si=pI8YVAM5LfReUcgD"
			}
		],
		Cuisine: {
			_id: 12,
			CuisineName: "Thai",
		},
		Category: {
			_id: 2,
			CategoryName: "Salad"
		},
		Type: {
			_id: 2,
			CategoryName: "Non-Veg"
		},
		Ingredients: [
			"2 tablespoons vegetable oil",
			"500g chicken thigh fillets, diced",
			"1 brown onion, chopped",
			"200g Passage to Asia Thai Green Curry",
			"400g can coconut milk",
			"1 bunch broccolini, trimmed, cut into 3cm pieces",
			"1 bunch Chinese broccoli, cut into 4cm pieces",
			"4 green onions, thinly sliced diagonally",
			"Steamed Jasmine rice, to serve",
			"Thai basil sprigs, to serve",
			"Sliced long red chilli, to serve",
			"Lime wedges, to serve"
		],
		Steps: [
			{
				StepNo: 1,
				Description: "Heat 1 tablespoon oil in a large non-stick frying pan over medium high heat. Add chicken and cook for 5 minutes or until browned on all sides. Transfer to a bowl."
			},
			{
				StepNo: 2,
				Description: "Heat remaining oil in frying pan. Add onion and cook for 5 minutes or until softened. Add Passage to Asia Thai Green Curry and coconut milk and bring to the boil. Return chicken to pan with broccolini. Reduce heat and simmer for 8 minutes or until cooked through. Stir in Chinese broccoli and half the green onion."
			},
			{
				StepNo: 3,
				Description: "Spoon rice into bowls and top generously with the curry. Scatter with basil, chilli and remaining green onion. Serve with lime wedges on the side."
			}
		],
		Tips: [
			"You can also use this same Thai Green Curry sauce to make a wonderful Salmon Curry that's filled with family friendly veggies."
		],
		NutritionalInfo: [
		]

	},
	{
		id: 4,
		DishName: "Grilled Salmon",
		Description: 'This grilled salmon tastes so good! A simple soy sauce and brown sugar marinade, with hints of lemon and garlic, are the perfect salty-sweet complement to rich salmon fillets. Even my 9-year-old loves this recipe! Serve with a side of grilled zucchini or grilled corn.',
		PrepTime: "10 mins",
		CookTime: "20 mins",
		Servings: 4,
		Author: {
			id: 12,
			UserName: "Chef John Davis"
		},
		Image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=1200&h=800&q=80",
		SocialLinks: [
			{
				_id: 1,
				name: "Youtube",
				url: "https://youtu.be/dQw4w9WgXcQ?si=pI8YVAM5LfReUcgD"
			}
		],
		Cuisine: {
			_id: 23,
			CuisineName: "Atlantic",
		},
		Category: {
			_id: 2,
			CategoryName: "Seafood"
		},
		Type: {
			_id: 2,
			CategoryName: "Non-Veg"
		},
		Ingredients: [
			"1 ½ pounds salmon fillets",
			"lemon pepper to taste",
			"garlic powder to taste",
			"salt to taste",
			"⅓ cup soy sauce",
			"⅓ cup brown sugar",
			"⅓ cup water",
			"¼ cup vegetable oil"
		],
		Steps: [
			{
				StepNo: 1,
				Description: "Gather all ingredients."
			},
			{
				StepNo: 2,
				Description: "Season salmon fillets with lemon pepper, garlic powder, and salt."
			},
			{
				StepNo: 3,
				Description: "Stir soy sauce, brown sugar, water, and vegetable oil together in a small bowl until sugar is dissolved. Place fish in a large resealable plastic bag; add soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours."
			},
			{
				StepNo: 4,
				Description: "Preheat an outdoor grill for medium heat and lightly oil the grate."
			},
			{
				StepNo: 5,
				Description: "Place salmon on the preheated grill, and discard marinade. Cook salmon until fish flakes easily with a fork, about 6 to 8 minutes per side."
			},
			{
				StepNo: 6,
				Description: "Serve and enjoy!"
			}
		],
		Tips: [
		],
		NutritionalInfo: [
			{
				_id: 1,
				index: "Calories",
				quantity: 1272,
				unit: "cal",
			},
			{
				_id: 2,
				index: "Fats",
				quantity: 80,
				unit: "g"
			},
			{
				_id: 3,
				index: "Carbohydrates",
				quantity: 52,
				unit: "g"
			},
			{
				_id: 4,
				index: "Protein",
				quantity: 84,
				unit: "g"
			}
		]
	},
	{
		id: 5,
		DishName: "Chocolate Lava Cake",
		Description: "The best lava cake I've ever had! Serve these decadent molten chocolate cakes topped with powdered sugar or vanilla ice cream. This recipe makes four delicious individual desserts.",
		PrepTime: "10 mins",
		CookTime: "15 mins",
		Servings: 4,
		Author: {
			_id: 1,
			UserName: "Chef Emma Wilson"
		},
		Image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&h=800&q=80",
		SocialLinks: [
			{
				_id: 1,
				name: "Youtube",
				url: "https://youtu.be/dQw4w9WgXcQ?si=pI8YVAM5LfReUcgD"
			}
		],
		Cuisine: {
			_id: 21,
			CuisineName: "France",
		},
		Category: {
			_id: 2,
			CategoryName: "Desert"
		},
		Type: {
			_id: 2,
			CategoryName: "Non-Veg"
		},
		Ingredients: [
			"6 ½ (1 ounce) squares semisweet chocolate, finely chopped",
			"½ cup butter, cut into 8 pieces",
			"3 eggs, room temperature",
			"⅓ cup white sugar",
			"2 tablespoons all-purpose flour",
			"4 teaspoons unsweetened cocoa powder",
			"1 pinch salt"
		],
		Steps: [
			{
				StepNo: 1,
				Description: "Preheat the oven to 400 degrees F (200 degrees C). Grease and flour four 6-ounce ramekins."
			},
			{
				StepNo: 2,
				Description: "Place chocolate and butter in the top of a double boiler over simmering water. Stir frequently, scraping down the sides with a rubber spatula to avoid scorching, until chocolate is melted, about 5 minutes."
			},
			{
				StepNo: 3,
				Description: "Combine eggs and sugar in a large bowl; beat with an electric mixer until pale and thick, about 5 minutes. Mix in melted chocolate, flour, cocoa powder, and a pinch of salt until combined. Pour batter into the prepared ramekins and place on a baking tray."
			},
			{
				StepNo: 4,
				Description: "Bake in the preheated oven until the sides are set but the middle is still jiggly, 10 to 13 minutes. Let cool for 5 minutes before serving."
			}
		],
		Tips: [
		],
		NutritionalInfo: [
			{
				_id: 1,
				index: "Calories",
				quantity: 2248,
				unit: "cal",
			},
			{
				_id: 2,
				index: "Fats",
				quantity: 200,
				unit: "g"
			},
			{
				_id: 3,
				index: "Carbohydrates",
				quantity: 140,
				unit: "g"
			},
			{
				_id: 4,
				index: "Protein",
				quantity: 44,
				unit: "g"
			}
		]
	}
]
