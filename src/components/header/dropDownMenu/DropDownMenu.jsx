import { useState } from 'react'
import { MenuStyled, ButtonStyled } from './DropDownMenuStyled'
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function DropDownMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [isArrowDown, setIsArrowDown] = useState(false);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setIsArrowDown(!isArrowDown);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setIsArrowDown(!isArrowDown);
	};

	return (
		<div>
			<ButtonStyled
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Product
				{isArrowDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
			</ButtonStyled>
			<MenuStyled
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
			</MenuStyled>
		</div>
	);
}

export default DropDownMenu;;