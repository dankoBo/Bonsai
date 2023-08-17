import styled from 'styled-components'
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

const MenuStyled = styled(Menu)`
	&.MuiList-root, .MuiMenu-list {
		width: 120px;
		color: #4C4D5F;
	}
`

const ButtonStyled = styled(Button)`
	&.MuiButtonBase-root {
		color: #4C4D5F;
	}
`

export { MenuStyled, ButtonStyled }