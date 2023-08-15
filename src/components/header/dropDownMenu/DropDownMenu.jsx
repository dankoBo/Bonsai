import {useState} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function DropDownMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Product
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>Item 1</MenuItem>
				<MenuItem onClick={handleClose}>Item 2</MenuItem>
				<MenuItem onClick={handleClose}>Item 3</MenuItem>
				<MenuItem onClick={handleClose}>Item 4</MenuItem>
				<MenuItem onClick={handleClose}>Item 5</MenuItem>
				<MenuItem onClick={handleClose}>Item 6</MenuItem>
				<MenuItem onClick={handleClose}>Item 7</MenuItem>
			</Menu>
		</div>
	);
}

export default DropDownMenu;;