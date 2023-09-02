import { Wrapper, TitleStyled } from './TeamStyled'
import PhotoCarousel from './carousel/Carousel';

function Team() {
	return (
		<Wrapper>
			<TitleStyled>Don't just take it from us.</TitleStyled>
			<PhotoCarousel/>
		</Wrapper>
	);
}

export default Team;