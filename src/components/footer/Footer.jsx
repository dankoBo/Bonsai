import Wrapper from './FooterStyled'
import Product from './product/Product';
import FreeResources from './freeResources/FreeResources'
import Bonsai from './bonsai/Bonsai';

function Footer() {
	return (
		<Wrapper>
			<Product />
			<FreeResources />
			<Bonsai />
		</Wrapper>
	);
}

export default Footer;