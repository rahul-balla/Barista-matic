import Card from 'react-bootstrap/Card';
import { coffee, latte, americano, cappuccino, mocha } from '../../ImageBase64';
import { useSelector, useDispatch } from 'react-redux';
import { orderCoffee, orderDecaf, orderLatte, orderAmericano, orderMocha, orderCappuccino, delay } from '../../actions';
import './Menu.css';

const Menu = () => {
	const dispatch = useDispatch();
	const inventory = useSelector((state) => state.updateInventory.ingredients);

	// boolean variables to enable/disable beverage selection based on ingredient availability
	const displayCoffee = inventory.coffee < 3 || inventory.sugar < 1 || inventory.cream < 1 ? false : true;
	const displayDecaf = inventory.decafCoffee < 3 || inventory.sugar < 1 || inventory.cream < 1 ? false : true;
	const displayLatte = inventory.espresso < 2 || inventory.steamedMilk < 1 ? false : true;
	const displayAmericano = inventory.espresso < 3 ? false : true;
	const displayMocha = inventory.espresso < 1 || inventory.cocoa < 1 || inventory.steamedMilk < 1 || inventory.whippedMilk < 1 ? false : true;
	const displayCappuccino = inventory.espresso < 2 || inventory.steamedMilk < 1 || inventory.foamedMilk < 1 ? false : true;

	// This function delays the dispatching of appropriate by 500 ms to show the user loading symbol
	const delaying = (e) => {
		dispatch(delay());
		setTimeout(() => {
			console.log('name: ', e.target.name);
			switch (e.target.name) {
				case 'coffee':
					dispatch(orderCoffee());
					break;
				case 'decafCoffee':
					dispatch(orderDecaf());
					break;
				case 'latte':
					dispatch(orderLatte());
					break;
				case 'americano':
					dispatch(orderAmericano());
					break;
				case 'mocha':
					dispatch(orderMocha());
					break;
				case 'cappuccino':
					dispatch(orderCappuccino());
					break;
			}
		}, 500);
	};

	// Using React bootstrap library to style the application

	return (
		<div id="menu-card">
			<Card>
				<Card.Body>
					<Card.Title>Hot Beverages</Card.Title>
					<Card.Text>Please select a beverage of your choice</Card.Text>

					{/* Following code displays the beverages to user in a grid-like fashion. Clicking on any of the divs is going to automatically update the available ingredient count by dispatching the corresponding action */}
					<div className="decrease-space">
						<div className="menu-items">
							<div className={displayCoffee ? 'center-text' : 'disabled-div'} onClick={(e) => delaying(e)}>
								<img src={coffee} className="picture-wdith" alt="coffee" name="coffee" />
								<p className="menu-font">
									<strong>Coffee - $2.75</strong>
								</p>
							</div>

							<div className={displayDecaf ? 'center-text' : 'disabled-div'} onClick={(e) => delaying(e)}>
								<img src={coffee} className="picture-wdith" alt="decaf coffee" name="decafCoffee" />
								<p className="menu-font">
									<strong>Decaf Coffee - $2.75</strong>
								</p>
							</div>
						</div>
					</div>

					<div className="decrease-space">
						<div className="menu-items">
							<div className={displayLatte ? 'center-text' : 'disabled-div'} onClick={(e) => delaying(e)}>
								<img src={latte} className="picture-wdith" alt="latte" name="latte" />
								<p className="menu-font">
									<strong>Caffe Latte - $2.55</strong>
								</p>
							</div>

							<div className={displayAmericano ? 'center-text' : 'disabled-div'} onClick={(e) => delaying(e)}>
								<img src={americano} className="picture-wdith" alt="americano" name="americano" />
								<p style={{ fontSize: '14px' }}>
									<strong>Caffe Americano $3.30</strong>
								</p>
							</div>
						</div>
					</div>

					<div className="decrease-space">
						<div className="menu-items">
							<div className={displayMocha ? 'center-text' : 'disabled-div'} onClick={(e) => delaying(e)}>
								<img src={mocha} className="picture-wdith" alt="mocha" name="mocha" />
								<p className="menu-font">
									<strong>Caffe Mocha - $3.35</strong>
								</p>
							</div>

							<div className={displayCappuccino ? 'center-text' : 'disabled-div'} onClick={(e) => delaying(e)}>
								<img src={cappuccino} className="picture-wdith" alt="cappuccino" name="cappuccino" />
								<p className="menu-font">
									<strong>Cappuccino $2.90</strong>
								</p>
							</div>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Menu;
