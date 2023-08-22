import { Wrapper, TextFieldStyled, ButtonStyled } from './SubscriptionFormstyled'

function SubscriptionForm() {
	return (
		<Wrapper>
			<TextFieldStyled
				variant="outlined"
				type="email"
				placeholder='Enter your email'
				margin="normal"
			/>
			<ButtonStyled variant="contained">
				Start free
			</ButtonStyled>
		</Wrapper>
	);
}

export default SubscriptionForm;
