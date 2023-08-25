import ChartTitleStyled from './FlowChartStyled'

function FlowChart(props) {
	return (
		<div>
			<ChartTitleStyled>{props.title}</ChartTitleStyled>
			<div>
				<img src={props.chart} alt="chart" />
			</div>
		</div>
	);
}

export default FlowChart;