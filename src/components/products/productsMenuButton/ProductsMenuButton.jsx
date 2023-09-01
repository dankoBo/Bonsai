import { ButtonStyled, ButtonTextStyled } from './ProductsMenuButtonStyled'

function ProductsMenuButton(props) {
	return (
		<div>
			<ButtonStyled>
				<img src={props.icon} alt="icon"/>
				<ButtonTextStyled>
					{props.buttonText}
				</ButtonTextStyled>
			</ButtonStyled>
		</div>
	);
}

export default ProductsMenuButton;