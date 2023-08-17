import InteractiveSection from '../interactiveSection/InteractiveSection';
import Logo from '../logo/Logo';
import { StyledAppBar, StyledBarWrapper } from './NavigationStyled'



function Navigation() {
	return (
			<StyledAppBar>
				<StyledBarWrapper>
					<Logo />
					<InteractiveSection />
				</StyledBarWrapper>
			</StyledAppBar>
	);
}

export default Navigation;