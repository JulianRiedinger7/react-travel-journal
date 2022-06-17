import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import data from './data';

function App() {
	return (
		<>
			<Header />
			{data.map((item, index) => (
				<Card key={index} {...item} />
			))}
		</>
	);
}

export default App;
