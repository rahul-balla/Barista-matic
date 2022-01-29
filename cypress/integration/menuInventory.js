// All these tests are testing the integration between the Menu and Inventory component. That's why I have included all tests in one file

describe('Menu and Inventory Integration', () => {
	/********************** Checking for ingredient count change by clicking on one beverage only  **********************/

	// Checking if clicking on Decaf Coffee is deleting the right amount of ingredients
	it('Clicking on Decaf Coffee to check ingredient count', () => {
		cy.visit('http://localhost:3000');
		cy.findByRole('img', {
			name: /decaf coffee/i,
		}).click();

		cy.get('[data-testid="test-decafCoffee"]').invoke('text').should('match', /7/i);
		cy.get('[data-testid="test-sugar"]').invoke('text').should('match', /9/i);
		cy.get('[data-testid="test-cream"]').invoke('text').should('match', /9/i);
	});

	// Checking if clicking on Americano is deleting the right amount of ingredients
	it('Clicking on Americano to check Espresso count', () => {
		cy.visit('http://localhost:3000');
		cy.findByRole('img', {
			name: /americano/i,
		}).click();

		cy.get('[data-testid="test-espresso"]').invoke('text').should('match', /7/i);
	});

	// Checking if clicking on Latte is deleting the right amount of ingredients
	it('Clicking on Latte to check ingredient count', () => {
		cy.visit('http://localhost:3000');
		cy.findByRole('img', {
			name: /latte/i,
		}).click();

		cy.get('[data-testid="test-espresso"]').invoke('text').should('match', /8/i);
		cy.get('[data-testid="test-steamedMilk"]').invoke('text').should('match', /9/i);
	});

	// Checking if clicking on Mocha is deleting the right amount of ingredients
	it('Clicking on Mocha to check ingredient count', () => {
		cy.visit('http://localhost:3000');
		cy.findByRole('img', {
			name: /mocha/i,
		}).click();

		cy.get('[data-testid="test-espresso"]').invoke('text').should('match', /9/i);
		cy.get('[data-testid="test-steamedMilk"]').invoke('text').should('match', /9/i);
		cy.get('[data-testid="test-whippedCream"]').invoke('text').should('match', /9/i);
		cy.get('[data-testid="test-cocoa"]').invoke('text').should('match', /9/i);
	});

	// Checking if clicking on Cappucino is deleting the right amount of ingredients
	it('Clicking on Cappuccino to check ingredient count', () => {
		cy.visit('http://localhost:3000');
		cy.findByRole('img', {
			name: /cappuccino/i,
		}).click();

		cy.get('[data-testid="test-espresso"]').invoke('text').should('match', /8/i);
		cy.get('[data-testid="test-steamedMilk"]').invoke('text').should('match', /9/i);
		cy.get('[data-testid="test-foamedMilk"]').invoke('text').should('match', /9/i);
	});

	/********************** Checking for ingredient count change by clicking on 2 beverages. This should behave the same way for other combination of beverages selected  **********************/

	// Checking if clicking on two drinks (Mocha and Latte) is deleting the right amount of ingredients
	it('Clicking on Mocha to check ingredient count', () => {
		cy.visit('http://localhost:3000');
		cy.findByRole('img', {
			name: /cappuccino/i,
		}).click();

		cy.findByRole('img', {
			name: /mocha/i,
		}).click();

		cy.get('[data-testid="test-espresso"]').invoke('text').should('match', /7/i);
		cy.get('[data-testid="test-steamedMilk"]').invoke('text').should('match', /8/i);
		cy.get('[data-testid="test-foamedMilk"]').invoke('text').should('match', /9/i);
		cy.get('[data-testid="test-cocoa"]').invoke('text').should('match', /9/i);
		cy.get('[data-testid="test-whippedCream"]').invoke('text').should('match', /9/i);
	});

	/********************** Reseting the ingredient count  **********************/

	// Reseting ingredient count
	it('Clicking on Restock button should reset all ingredient count to 10', () => {
		cy.visit('http://localhost:3000');
		cy.findByRole('img', {
			name: /cappuccino/i,
		}).click();

		cy.findByRole('img', {
			name: /mocha/i,
		}).click();

		cy.findByRole('button', {
			name: /re\-stock inventory/i,
		}).click();

		cy.get('[data-testid="test-coffee"]').invoke('text').should('match', /10/i);
		cy.get('[data-testid="test-decafCoffee"]').invoke('text').should('match', /10/i);
		cy.get('[data-testid="test-sugar"]').invoke('text').should('match', /10/i);
		cy.get('[data-testid="test-cream"]').invoke('text').should('match', /10/i);
		cy.get('[data-testid="test-espresso"]').invoke('text').should('match', /10/i);
		cy.get('[data-testid="test-steamedMilk"]').invoke('text').should('match', /10/i);
		cy.get('[data-testid="test-foamedMilk"]').invoke('text').should('match', /10/i);
		cy.get('[data-testid="test-cocoa"]').invoke('text').should('match', /10/i);
		cy.get('[data-testid="test-whippedCream"]').invoke('text').should('match', /10/i);
	});

	/********************** Checking for disabling of beverage selection due to lack of ingredients  **********************/

	//checking if the beverage selection should be disabled due to lack of ingredients
	it('Beverage selection disabling', () => {
		cy.visit('http://localhost:3000');
		cy.findByRole('img', {
			name: /americano/i,
		}).click();

		cy.findByRole('img', {
			name: /americano/i,
		}).click();

		cy.findByRole('img', {
			name: /americano/i,
		}).click();

		cy.findByRole('img', {
			name: /latte/i,
		}).should('have.css', 'pointer-events', 'none');

		cy.findByRole('img', {
			name: /americano/i,
		}).should('have.css', 'pointer-events', 'none');

		cy.findByRole('img', {
			name: /cappuccino/i,
		}).should('have.css', 'pointer-events', 'none');
	});
});
