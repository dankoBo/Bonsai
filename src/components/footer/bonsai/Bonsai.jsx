import { BonsaiContainer, TitleStyled, AboutContainer, AffiliatesContainer, ComparsionsContainer, ButtonStyled } from './BonsayStyled'

function Bonsai() {
	return (
		<BonsaiContainer>
			<TitleStyled>Bonsai</TitleStyled>
			<AboutContainer>
				<ButtonStyled>About</ButtonStyled>
				<ButtonStyled>Support</ButtonStyled>
				<ButtonStyled>LinkedIn</ButtonStyled>
				<ButtonStyled>Twitter</ButtonStyled>
				<ButtonStyled>Legal</ButtonStyled>
			</AboutContainer>
			<AffiliatesContainer>
				<ButtonStyled>Affiliates</ButtonStyled>
				<ButtonStyled>Write for Us</ButtonStyled>
			</AffiliatesContainer>
			<ComparsionsContainer>
				<ButtonStyled>Comparisons</ButtonStyled>
			</ComparsionsContainer>
		</BonsaiContainer>
	);
}

export default Bonsai;