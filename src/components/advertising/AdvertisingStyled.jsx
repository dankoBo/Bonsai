import styled from 'styled-components'
import Button from '@mui/material/Button'


const Wrapper = styled.div`
	width: 1066px;
	height: 336px;
	border-radius: 8px;
	background-color: #F2FAFF;
	margin: 0 auto 240px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const TitleStyled = styled.h2`
	width: 400px;
	color: #4C4D5F;
	font-family: Roboto;
	font-size: 42px;
	font-style: normal;
	font-weight: 400;
`

const WordStyled = styled.span`
	color: #01B289;
`

const ButtonStyled = styled(Button)`
	&.MuiButtonBase-root {
		background-color: #00B388;
		color: #FFFFFF;
		border: 1px solid #00B388;
		&:hover {
			background-color: #FFFFFF;
			color: #00B388;
			border: 1px solid #00B388;
		}
	}
`

export { Wrapper, ButtonStyled, TitleStyled, WordStyled }








