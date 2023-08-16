import AuthButtons from '../authButtons/AuthButtons';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import Interactions from './InteractiveSectionStyled'

function InteractiveSection() {
	return (
		<Interactions>
			<DropDownMenu />
			<AuthButtons />
		</Interactions>
	);
}

export default InteractiveSection;