import InteractiveSection from '../interactiveSection/InteractiveSection';
import Logo from '../logo/Logo';
import { StyledAppBar, StyledBox } from './NavigationStyled'



function Navigation() {
	return (
			<StyledAppBar>
				<StyledBox>
					<Logo />
					<InteractiveSection />
				</StyledBox>
			</StyledAppBar>
	);
}

export default Navigation;