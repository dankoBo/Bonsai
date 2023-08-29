import styled from 'styled-components'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';


const ButtonStyled = styled(Button)`
	&.MuiButton-root {
		width: 343px;
		height: 78px;
		border-bottom: 1px solid black;
		border-radius: 0;
		color: #4C4D5F;
		justify-content: flex-start
	}

`
const ButtonTextStyled = styled.span`
	margin: 0 179px 0 26px;
	color: #4C525A;
	font-family: Roboto;
	font-size: 22px;
	font-weight: 400;
	text-transform: none;
	font-style: normal;
`

const MenuStyled = styled(Menu)`
	&.MuiMenu-root {
		margin: 0px 0 0 345px;
	}

	& .MuiList-root {
		width: 200px;
	}
`

export { MenuStyled, ButtonStyled, ButtonTextStyled }