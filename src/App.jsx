import './App.css'
import Box from '@mui/material/Box';
import Header from './components/header/Header';
import About from './components/about/About';
import Products from './components/products/Products';
import Statistic from './components/statistic/Statistic';
import Team from './components/team/Team';
import Advertising from './components/advertising/Advertising';


function App() {
	
		
	return (
		<Box
			sx={{
				width: 1440,
				backgroundColor: 'white'
			}}>
			
			<Header />
			<About />
			<Products />
			<Statistic />
			<Team />
			<Advertising />
		</Box>
	)
}

export default App