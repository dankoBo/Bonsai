import Wrapper from './StatisticStyled'
import StatisticOptionsContainer from './statisticOptions/StatisticOptionsContainer';
import StatisticTitle from './statisticTitle/StatisticTitle';

function Statistic() {
	return (
		<Wrapper>
			<StatisticTitle />
			<StatisticOptionsContainer />
		</Wrapper>
	);
}

export default Statistic;