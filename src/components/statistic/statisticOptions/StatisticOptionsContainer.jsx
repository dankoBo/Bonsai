import Wrapper from './StatisticOptionsContainerStyled'
import StatisticOption from '../statisticOption/StatisticOption';
import workTypesImage from '../../../assets/images/statistic/statistic_type.png'
import workGlobalImage from '../../../assets/images/statistic/statistic_global.png'

function StatisticOptionsContainer() {
	const typesTitle = 'Built for All Work Types'
	const globalTitle = 'Built for Global Businesses'
	const typesSubtitle = 'We proudly back people with wide-ranging businesses—from design and marketing to development, writing, and photography.'
	const globalSubtitle = 'Bonsai has international coverage across the United States, Canada, UK, Australia and more, with 180 currencies supported.'

	return (
		<Wrapper>
			<StatisticOption
				image={workTypesImage}
				title={typesTitle}
				subtitle={typesSubtitle}
			/>
			<StatisticOption
				image={workGlobalImage}
				title={globalTitle}
				subtitle={globalSubtitle}
			/>
		</Wrapper>
	);
}

export default StatisticOptionsContainer;