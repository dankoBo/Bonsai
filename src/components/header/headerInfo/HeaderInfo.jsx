import HeaderBanner from "../headerBanner/HeaderBanner";
import Subscription from "../subscription/Subscription";
import InfoWrapper from "./HeaderInfoStyled";

function HeaderInfo() {
	return (
		<InfoWrapper>
			<Subscription />
			<HeaderBanner />
		</InfoWrapper>
	)
}

export default HeaderInfo;