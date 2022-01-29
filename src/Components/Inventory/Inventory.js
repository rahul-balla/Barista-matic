import { Card, Table, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { restock } from '../../actions';
import './Inventory.css';

const Inventory = () => {
	// getting the inventory list from the store
	const inventory = useSelector((state) => state.updateInventory.ingredients);
	const isLoading = useSelector((state) => state.updateInventory.isLoading);

	// Dispatch function will be used to trigger actions to change ingredient quantity and push these changes to the redux store
	const dispatch = useDispatch();

	const attributeNames = (attr) => {
		switch (attr) {
			case 'coffee':
				return 'Coffee';
			case 'decafCoffee':
				return 'Decaf Coffee';
			case 'sugar':
				return 'Sugar';
			case 'cream':
				return 'Cream';
			case 'steamedMilk':
				return 'Steamed Milk';
			case 'foamedMilk':
				return 'Foamed Milk';
			case 'espresso':
				return 'Espresso';
			case 'cocoa':
				return 'Cocoa';
			case 'whippedCream':
				return 'Whipped Cream';
			default:
				return '';
		}
	};

	let tableRows = [];

	// Using React bootstrap library to style the application
	return (
		<div id="menu-card">
			<Card>
				<Card.Body>
					<Card.Title>Inventory</Card.Title>
					<Card.Text>Here is a list of the available ingredients to create the Beverages</Card.Text>

					{/* Table to display the ingredient quantity */}
					<div id="table-style">
						<Table striped bordered hover>
							<thead>
								<tr id="menu-items">
									<th>Ingredient</th>
									<th>Number of Available units</th>
								</tr>
							</thead>
							<tbody>
								{!isLoading &&
									Object.keys(inventory).forEach((attr, index) => {
										tableRows.push(
											<tr id="menu-items" key={index}>
												<td>{attributeNames(attr)}</td>
												<td data-testid={`test-${attr}`}>{inventory[attr]}</td>
											</tr>
										);
									})}

								{tableRows}
							</tbody>
						</Table>
					</div>

					{isLoading && (
						<Spinner id="spinner-location" animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					)}

					{/* The restock ingredient button will reset all the ingredient quantity to 10 */}
					<Button id="restock-btn-style" onClick={() => dispatch(restock())}>
						Re-stock Inventory
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Inventory;
