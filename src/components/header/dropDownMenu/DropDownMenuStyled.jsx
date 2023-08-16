import styled from 'styled-components'
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

const MenuStyled = styled(Menu)`
	&.MuiList-root, .MuiMenu-list {
		width: 120px;
	}
`

const ButtonStyled = styled(Button)`
	&.MuiButtonBase-root {
		color: black;
	}
`

export { MenuStyled, ButtonStyled }