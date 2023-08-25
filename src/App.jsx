import './App.css'
import Box from '@mui/material/Box';
import Header from './components/header/Header';
import About from './components/about/About';
import Products from './components/products/Products';


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
		</Box>
	)
}

export default App