import styled from 'styled-components'

const Wrapper = styled.div`
	height: 138px;
	text-align: center;
	border: 1px solid blue;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`
const TitleStyled = styled.h2`
	width: 482px;
	margin: 0;
	color: #4C4D5F;
	font-family: Roboto;
	font-size: 43px;
	font-weight: 400;
`
const SubtitleStyled = styled.h4`
	width: 673px;
	margin: 0;
	color: rgba(76, 77, 95, 0.66);
	font-family: Roboto;
	font-size: 24px;
	font-weight: 400;
`

export { Wrapper, TitleStyled, SubtitleStyled }