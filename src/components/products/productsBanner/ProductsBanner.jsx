import Wrapper from './ProductsBannerStyled'
import ProductsBannerWoman from '../../../assets/images/products/products_woman.png'

function ProductsBanner() {
	return (
		<Wrapper>
			<img src={ProductsBannerWoman} alt="woman" />
		</Wrapper>
	);
}

export default ProductsBanner;