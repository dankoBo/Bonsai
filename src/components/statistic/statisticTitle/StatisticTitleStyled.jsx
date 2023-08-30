import styled from 'styled-components'

const Wrapper = styled.div`
	height: 57px;
	z-index: 999;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const TitleStyled = styled.h2`
	width: 951px;
	margin: 27px 0 48px;
	color: #4C4D5F;
	text-align: center;
	font-family: Roboto;
	font-size: 46px;
	font-style: normal;
	font-weight: 400;
`

const SubtitleStyled = styled.h4`
	width: 680px;
	margin: 0;
	color: rgba(76, 77, 95, 0.67);
	text-align: center;
	font-family: Roboto;
	font-size: 25px;
	font-style: normal;
	font-weight: 400;
`

export { Wrapper, TitleStyled, SubtitleStyled }