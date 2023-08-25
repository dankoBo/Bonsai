import Wrapper from './FlowChartContainerStyled'
import FlowChart from '../flowChart/FlowChart'
function FlowChartContainer() {

	const chartImageWithoutBonsay = '/src/assets/images/about/about_without_bonsai.png'
	const chartImageWithBonsay = '/src/assets/images/about/about_with_bonsai.png'

	return (
		<Wrapper>
			<FlowChart chart={chartImageWithoutBonsay} title="Without Bonsai"/>
			<FlowChart chart={chartImageWithBonsay} title="With Bonsai"/>
		</Wrapper>
	);
}

export default FlowChartContainer;