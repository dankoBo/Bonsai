import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Wrapper = styled.div`
	width: 496px;
	height: 70px;
	display: flex;
	align-items: center;
`

const TextFieldStyled = styled(TextField)`
	& .MuiOutlinedInput-root {
		border: 1px solid #01B289;
		border-radius: 4px 0px 0px 4px;
		width: 337px;
		height: 70px;
		&:focus {
			border: 2px solid #01B289;
		}
	}

`

const ButtonStyled = styled(Button)`
	&.MuiButtonBase-root {
		color: #FFFFFF;
		background-color: #01B289;
		height: 70px;
		margin-top: 7px;
		border-radius: 0 5px 5px 0;
		&:hover {
			border: 2px solid #01B289;
			background-color: #0bebb6;
		}
	}
`

export { Wrapper, TextFieldStyled, ButtonStyled }