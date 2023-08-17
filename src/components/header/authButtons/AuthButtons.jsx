import { ButtonsWrapper, ButtonStyled } from './AuthButtonsStyled'

const AuthButtons = () => {
	return (
		<ButtonsWrapper>
			<ButtonStyled variant="outlined">
				Log In
			</ButtonStyled>
			<ButtonStyled variant="outlined">
				Start Free
			</ButtonStyled>
		</ButtonsWrapper>
	);
}

export default AuthButtons