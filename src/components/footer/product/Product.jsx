import { ProductContainer, TitleStyled, ProposalsContainer, PricingContainer, ButtonStyled } from './ProductStyled'

function Product() {
	return (
		<ProductContainer>
			<TitleStyled>Product</TitleStyled>
			<ProposalsContainer>
				<ButtonStyled>Proposals</ButtonStyled>
				<ButtonStyled>Contracts</ButtonStyled>
				<ButtonStyled>Invoicing</ButtonStyled>
				<ButtonStyled>Client CRM</ButtonStyled>
				<ButtonStyled>Time Tracking</ButtonStyled>
				<ButtonStyled>Task Tracking</ButtonStyled>
				<ButtonStyled>Forms</ButtonStyled>
				<ButtonStyled>Accounting</ButtonStyled>
				<ButtonStyled>Bonsai Tax</ButtonStyled>
			</ProposalsContainer>
			<PricingContainer>
				<ButtonStyled>Pricing</ButtonStyled>
				<ButtonStyled>Bonsai Reviews</ButtonStyled>
			</PricingContainer>
		</ProductContainer>
	);
}

export default Product;