import Wrapper from './ProductsBannerBackStyled'
import productsBannerBg from '../../../assets/images/products/products_woman_bg.png'

function ProductsBannerBack() {
	return (
		<Wrapper>
			<img src={productsBannerBg} alt="background" />
		</Wrapper>
	);
}

export default ProductsBannerBack;