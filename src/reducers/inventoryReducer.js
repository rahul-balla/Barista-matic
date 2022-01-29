// Initial quantity of all ingredients
const initialState = {
	ingredients: {
		coffee: 10,
		decafCoffee: 10,
		sugar: 10,
		cream: 10,
		steamedMilk: 10,
		foamedMilk: 10,
		espresso: 10,
		cocoa: 10,
		whippedCream: 10,
	},
	isLoading: false,
};

// Based on the specific action type the reducer will make corresponding changes to the state and push it to the store which is then reflected to the user
const inventoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'COFFEE':
			return {
				...state,
				ingredients: {
					...state.ingredients,
					coffee: state.ingredients.coffee - 3,
					sugar: state.ingredients.sugar - 1,
					cream: state.ingredients.cream - 1,
				},

				isLoading: false,
			};
		case 'DECAFCOFFEE':
			console.log('hitting decaf');
			return {
				...state,
				ingredients: {
					...state.ingredients,
					decafCoffee: state.ingredients.decafCoffee - 3,
					sugar: state.ingredients.sugar - 1,
					cream: state.ingredients.cream - 1,
				},

				isLoading: false,
			};
		case 'LATTE':
			return {
				...state,
				ingredients: {
					...state.ingredients,
					espresso: state.ingredients.espresso - 2,
					steamedMilk: state.ingredients.steamedMilk - 1,
				},

				isLoading: false,
			};
		case 'AMERICANO':
			return {
				...state,
				ingredients: {
					...state.ingredients,
					espresso: state.ingredients.espresso - 3,
				},

				isLoading: false,
			};
		case 'MOCHA':
			return {
				...state,
				ingredients: {
					...state.ingredients,
					espresso: state.ingredients.espresso - 1,
					cocoa: state.ingredients.cocoa - 1,
					steamedMilk: state.ingredients.steamedMilk - 1,
					whippedCream: state.ingredients.whippedCream - 1,
				},

				isLoading: false,
			};
		case 'CAPPUCCINO':
			return {
				...state,
				ingredients: {
					...state.ingredients,
					espresso: state.ingredients.espresso - 2,
					steamedMilk: state.ingredients.steamedMilk - 1,
					foamedMilk: state.ingredients.foamedMilk - 1,
				},

				isLoading: false,
			};
		case 'RESTOCK':
			return initialState;
		case 'DELAY':
			return {
				...state,
				isLoading: true,
			};
		default:
			return initialState;
	}
};

export default inventoryReducer;
