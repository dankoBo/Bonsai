import Navigation from './navigation/Navigation'
import HeaderWrapper from './HeaderStyled'
import HeaderInfo from './headerInfo/HeaderInfo';

function Header() {

	return (
		<HeaderWrapper>
			<Navigation />
			<HeaderInfo />
		</HeaderWrapper>
	);
}

export default Header;