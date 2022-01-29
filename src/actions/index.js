// Actions describe what needs to be done. These actions specify the type that needs to be triggered in the inventoryReducer.js file

export const orderCoffee = () => {
	return {
		type: 'COFFEE',
	};
};

export const orderDecaf = () => {
	return {
		type: 'DECAFCOFFEE',
	};
};

export const orderLatte = () => {
	return {
		type: 'LATTE',
	};
};

export const orderAmericano = () => {
	return {
		type: 'AMERICANO',
	};
};

export const orderMocha = () => {
	return {
		type: 'MOCHA',
	};
};

export const orderCappuccino = () => {
	return {
		type: 'CAPPUCCINO',
	};
};

export const restock = () => {
	return {
		type: 'RESTOCK',
	};
};

export const delay = () => {
	return {
		type: 'DELAY',
	};
};
