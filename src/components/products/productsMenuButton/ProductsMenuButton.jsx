import { ButtonStyled, ButtonTextStyled } from './ProductsMenuButtonStyled'
import contractsIcon from '../../../assets/images/products/products_contracts.png'

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