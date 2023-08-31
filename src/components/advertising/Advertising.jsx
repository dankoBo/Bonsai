import { Wrapper, ButtonStyled, TitleStyled, WordStyled } from './AdvertisingStyled'


function Advertising() {
	return (
		<Wrapper>
			<TitleStyled>
				It's <WordStyled>your</WordStyled> business. We're just here to help.
			</TitleStyled>
			<div>
				<ButtonStyled>
					Start Free
				</ButtonStyled>
			</div>
		</Wrapper>
	);
}

export default Advertising;