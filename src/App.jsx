import './App.css'
import Box from '@mui/material/Box';
import Header from './components/header/Header';
import About from './components/about/About';


function App() {
	
		
	return (
		<Box
			sx={{
				width: 1440,
				backgroundColor: 'lightGray'
			}}>
			
			<Header />
			<About />
		</Box>
	)
}

export default App