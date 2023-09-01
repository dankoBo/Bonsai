import styled from 'styled-components'
import Button from '@mui/material/Button';

const ResourcesContainer = styled.div`
	width: 294px;
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

const FreelanceContainer = styled.div`
	width: 200px;
	height: 124px;
	margin-bottom: 26px;
`

const TaxesContainer = styled.div`
	width: 260px;
	height: 82px;
	margin-bottom: 25px;
`

const TemplatesContainer = styled.div`
	width: 200px;
	height: 280px;
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

export { ResourcesContainer, FreelanceContainer, TitleStyled, TaxesContainer, TemplatesContainer, ButtonStyled }