import { ContainerStyled, ImageStyled, MemberTextStyled, MemberNameStyled, MemberSeniority } from './TeamMemberStyled'



function TeamMember(props) {
	return (
		<ContainerStyled>
			<ImageStyled>
				<img src={props.image} alt="" />
			</ImageStyled>
			<MemberTextStyled>
				{props.text}
			</MemberTextStyled>
			<MemberNameStyled>
				{props.name}
			</MemberNameStyled>
			<MemberSeniority>
				{props.seniority}
			</MemberSeniority>
		</ContainerStyled>
	);
}

export default TeamMember;