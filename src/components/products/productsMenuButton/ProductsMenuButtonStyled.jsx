import styled from 'styled-components'
import Button from '@mui/material/Button';

const ButtonStyled = styled(Button)`
	&.MuiButton-root {
		width: 343px;
		height: 78px;
		border-bottom: 1px solid black;
		border-radius: 0;
		color: #4C4D5F;
		justify-content: flex-start;
	}

`
const ButtonTextStyled = styled.span`
	margin-left: 26px;
	color: #4C525A;
	font-family: Roboto;
	font-size: 22px;
	font-weight: 400;
	text-transform: none;
	font-style: normal;
`
export { ButtonStyled, ButtonTextStyled }