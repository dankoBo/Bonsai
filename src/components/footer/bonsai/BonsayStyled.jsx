import styled from 'styled-components'
import Button from '@mui/material/Button';

const BonsaiContainer = styled.div`
	width: 100px;
	height: 635px;
	display: flex;
	flex-direction: column;
`

const TitleStyled = styled.h2`
	width: 160px;
	color: #4C4D5F;
	font-family: Roboto;
	font-size: 17px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 0.12px;
	text-transform: uppercase;
	margin: 0 0 41px 6px;
`
const AboutContainer = styled.div`
	width: 294px;
	height: 155px;
`

const AffiliatesContainer = styled.div`
	width: 294px;
	height: 62px;
`

const ComparsionsContainer = styled.div`
	width: 294px;
	height: 31px;
`


const ButtonStyled = styled(Button)`
	&.MuiButton-root {
		width: 200px;
		height: 30px;
		color: #4C4D5F;
		font-family: Roboto;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		letter-spacing: 0.11px;
		text-transform: none;
		justify-content: flex-start;
	}
`

export { BonsaiContainer, TitleStyled, AboutContainer, AffiliatesContainer, ComparsionsContainer, ButtonStyled }