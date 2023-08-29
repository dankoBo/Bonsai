import Wrapper from './ProductsStyled'
import ProductsInfo from './productsInfo/ProductsInfo';
import ProductsMenu from './productsMenu/ProductsMenu';

function Products() {
	return (
		<Wrapper>
			<ProductsMenu />
			<ProductsInfo />
		</Wrapper>
	);
}

export default Products;