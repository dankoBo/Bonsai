import { ResourcesContainer, FreelanceContainer, TitleStyled, TaxesContainer, TemplatesContainer, ButtonStyled } from './FreeResourcesStyled'

function FreeResources() {
	return (
		<ResourcesContainer>
			<TitleStyled>Free Resources</TitleStyled>
			<FreelanceContainer>
				<ButtonStyled>Freelance Resources</ButtonStyled>
				<ButtonStyled>Freelance Blog by Bonsai</ButtonStyled>
				<ButtonStyled>How to Write a Contract</ButtonStyled>
				<ButtonStyled>Online Signature Maker</ButtonStyled>
			</FreelanceContainer>
			<TaxesContainer>
				<ButtonStyled>Self-Employed Taxes Hub</ButtonStyled>
				<ButtonStyled>Self-Employed Tax Calculator</ButtonStyled>
				<ButtonStyled>Self-Employed Tax Deductions</ButtonStyled>
			</TaxesContainer>
			<TemplatesContainer>
				<TitleStyled>Templates</TitleStyled>
				<ButtonStyled>Invoice Templates</ButtonStyled>
				<ButtonStyled>Proposal Templates</ButtonStyled>
				<ButtonStyled>Contract Templates</ButtonStyled>
				<ButtonStyled>Agreement Templates</ButtonStyled>
				<ButtonStyled>Scope of Work Templates</ButtonStyled>
				<ButtonStyled>Quote Templates</ButtonStyled>
				<ButtonStyled>Credit Note Templates</ButtonStyled>
				<ButtonStyled>Estimate Templates</ButtonStyled>
			</TemplatesContainer>
		</ResourcesContainer>
	);
}

export default FreeResources;