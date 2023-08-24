import Wrapper from "./AboutStyled";
import FlowChartContainer from "./flowChartContainer/FlowChartContainer";
import TitleSubtitle from "./titleSubtitle/TitleSubtitle";

function About() {
	return (
		<Wrapper>
			<TitleSubtitle />
			<FlowChartContainer />
		</Wrapper>
	);
}

export default About;