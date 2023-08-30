import { OptionContainer, OptionImage, OptionTitle, OptionSubtitle } from './StatisticOptionStyled'

function StatisticOption(props) {
	return (
		<OptionContainer>
			<OptionImage>
				<img src={props.image} alt="option" />
			</OptionImage>
			<OptionTitle>
				{props.title}
			</OptionTitle>
			<OptionSubtitle>
				{props.subtitle}
			</OptionSubtitle>
		</OptionContainer>
	);
}

export default StatisticOption;