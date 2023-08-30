import ProductsBanner from "../productsBanner/ProductsBanner";
import ProductsBannerBack from "../productsBannerBack/ProductsBannerBack";
import ProductsTitle from "../productsTitle/ProductsTitle";
import Wrapper from './ProductsInfoStyled'

function ProductsInfo() {
	return (
		<Wrapper>
			<ProductsTitle />
			<ProductsBanner />
			<ProductsBannerBack />
		</Wrapper>
	);
}

export default ProductsInfo;