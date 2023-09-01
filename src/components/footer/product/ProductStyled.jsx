import styled from 'styled-components'
import Button from '@mui/material/Button';

const ProductContainer = styled.div`
	width: 294px;
	height: 635px;
`

const TitleStyled = styled.h2`
	width: 83px;
	color: #4C4D5F;
	font-family: Roboto;
	font-size: 17px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 0.12px;
	text-transform: uppercase;
	margin: 0 0 41px 6px;
`

const ProposalsContainer = styled.div`
	height: 279px;
	display: flex;
	flex-direction: column;
	margin-bottom: 26px;

`
const PricingContainer = styled.div`
	height: 279px;
	display: flex;
	flex-direction: column;
`

const ButtonStyled = styled(Button)`
	&.MuiButton-root {
		width: 110px;
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
export { ProductContainer, TitleStyled, ProposalsContainer, PricingContainer, ButtonStyled }

