import styled from 'styled-components'
import Button from '@mui/material/Button'

const ButtonsWrapper = styled.div`
	width: 220px;
	display: flex;
	justify-content: space-between;
`

const ButtonStyled = styled(Button)`
	&.MuiButtonBase-root {
		background-color: #FFFFFF;
		color: #00B388;
		border: 1px solid #00B388;
		&:hover {
			background-color: #00B388;
			color: #FFFFFF;
			border: 1px solid #00B388;
		}
	}
`

export { ButtonsWrapper, ButtonStyled }