import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Inventory from './Components/Inventory/Inventory';

function App() {
	return (
		<div className="App">
			{/* Header component contains the heading of the application */}
			<Header />
			<div id="main-body">
				{/* Menu component contains the UI for the list of beverages available to order */}
				<div className="half-screen">
					<Menu />
				</div>

				{/* Inventory component contains the lists of avialable ingredients which changes dynamically based on user selection*/}
				<div className="half-screen">
					<Inventory />
				</div>
			</div>
		</div>
	);
}

export default App;
