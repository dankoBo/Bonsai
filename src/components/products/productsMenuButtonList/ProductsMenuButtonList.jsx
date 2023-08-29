import { useState, useRef } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { MenuStyled, ButtonStyled, ButtonTextStyled } from './ProductsMenuButtonListStyled'

import proposalsIcon from '../../../assets/images/products/products_proposals.png'

function ProductsMenuButtonList(props) {
	const [anchorEl, setAnchorEl] = useState(null);
	const buttonRef = useRef();
	const open = Boolean(anchorEl);
	const handleMouseEnter = (event) => {
	  setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
	  setAnchorEl(null);
	};
	
	return (
		<div>
			<ButtonStyled
				id="fade-button"
				aria-controls={open ? 'fade-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				ref={buttonRef}
				onClick={handleMouseEnter}
			>
				<img src={props.icon} alt="icon"/>
				<ButtonTextStyled>{props.buttonText}</ButtonTextStyled>
				{<ArrowRightIcon />}
			</ButtonStyled>
			<MenuStyled
				id="fade-menu"
				MenuListProps={{
				'aria-labelledby': 'fade-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				<MenuItem onClick={handleClose}>ITEM 1</MenuItem>
				<MenuItem onClick={handleClose}>ITEM 2</MenuItem>
				<MenuItem onClick={handleClose}>ITEM 3</MenuItem>
				<MenuItem onClick={handleClose}>ITEM 4</MenuItem>
				<MenuItem onClick={handleClose}>ITEM 5</MenuItem>
				<MenuItem onClick={handleClose}>ITEM 6</MenuItem>
				<MenuItem onClick={handleClose}>ITEM 7</MenuItem>
      		</MenuStyled>
		</div>
	);
}

export default ProductsMenuButtonList;