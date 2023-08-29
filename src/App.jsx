import './App.css'
import Box from '@mui/material/Box';
import Header from './components/header/Header';
import About from './components/about/About';
import Products from './components/products/Products';
import Statistic from './components/statistic/Statistic';


function App() {
	
		
	return (
		<Box
			sx={{
				width: 1440,
				backgroundColor: 'lightGray'
			}}>
			
			<Header />
			<About />
			<Products />
			<Statistic />
		</Box>
	)
}

export default App