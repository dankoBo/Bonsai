import Button from '@mui/material/Button';
import ButtonsWrapper from './AuthButtonsStyled'

const AuthButtons = () => {
	return (
		<ButtonsWrapper>
			<Button variant="outlined">
				Log In
			</Button>
			<Button variant="outlined">
				Start Free
			</Button>
		</ButtonsWrapper>
	);
}

export default AuthButtons