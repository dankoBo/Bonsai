import HeaderInfoDescription from "../headerInfoDescription/HeaderInfoDescription";
import HeaderInfoTitle from "../headerInfoTitle/HeaderInfoTitle";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import Wrapper from "./SubscriptionStyled";

function Subscription() {
	return (
		<Wrapper>
			<HeaderInfoTitle />
			<HeaderInfoDescription />
			<SubscriptionForm />
		</Wrapper>
	);
}

export default Subscription;