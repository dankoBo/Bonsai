import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TeamMember from '../teamMember/TeamMember';
import { CarouselPageStyled } from './CarouselStyled'

import mihmImg from '../../../assets/images/team/team_mihm.png'	
import urbinatiImg from '../../../assets/images/team/team_urbinati.png'	

const PhotoCarousel = () => {
	return (
		<Carousel
			showThumbs={false}
			showStatus={false}
		>
			<CarouselPageStyled>
				<TeamMember
					image={mihmImg}
					text="For all my Freelancer / Small Agency followers, I wish I'd discovered @bonsaiinc long ago - great templated contract"
					name="David Mihm"
					seniority="Founder of TidingsCo"	
				/>
				<TeamMember
					image={urbinatiImg}
					text="@bonsaiinc is probably my all time favorite freelance tool. hands down. the team is super responsive and accessible when i have questions."
					name="David Urbinati"
					seniority="Motion design / animation"
				/>
			</CarouselPageStyled>
			<CarouselPageStyled>
				<TeamMember
					image={mihmImg}
					text="For all my Freelancer / Small Agency followers, I wish I'd discovered @bonsaiinc long ago - great templated contract"
					name="David Mihm"
					seniority="David Mihm"
				/>
				<TeamMember
					image={urbinatiImg}
					text="@bonsaiinc is probably my all time favorite freelance tool. hands down. the team is super responsive and accessible when i have questions."
					name="David Urbinati"
					seniority="Motion design / animation"
				/>
			</CarouselPageStyled>
		</Carousel>
	);
};

export default PhotoCarousel;