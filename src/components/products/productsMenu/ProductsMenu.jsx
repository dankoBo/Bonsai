import ProductsMenuButton from '../productsMenuButton/ProductsMenuButton';
import ProductsMenuButtonList from '../productsMenuButtonList/ProductsMenuButtonList';
import Wrapper from './ProductsMenuStyled'

import ProposalsIcon from '../../../assets/images/products/products_proposals.png'
import ContractsIcon from '../../../assets/images/products/products_contracts.png'
import CrmIcon from '../../../assets/images/products/products_crm.png'
import TimeTrackingIcon from '../../../assets/images/products/products_time-tracking.png'
import InvoicesIcon from '../../../assets/images/products/products_invoices.png'
import TaskTrackingIcon from '../../../assets/images/products/products_task-tracking.png'
import AccountingIcon from '../../../assets/images/products/products_accounting.png'
import FormIcon from '../../../assets/images/products/products_form.png'

function ProductsMenu() {
	return (
		<Wrapper>
			<ProductsMenuButtonList icon={ProposalsIcon} buttonText='Proposals' />
			<ProductsMenuButton icon={ContractsIcon} buttonText='Contracts' />
			<ProductsMenuButton icon={CrmIcon} buttonText='Client CRM' />
			<ProductsMenuButton icon={TimeTrackingIcon} buttonText='Time Tracking' />
			<ProductsMenuButtonList icon={InvoicesIcon} buttonText='Invoices' />
			<ProductsMenuButton icon={TaskTrackingIcon} buttonText='Task Tracking' />
			<ProductsMenuButton icon={AccountingIcon} buttonText='Accounting & Taxes' />
			<ProductsMenuButton icon={FormIcon} buttonText='Forms' />
		</Wrapper>
	);
}

export default ProductsMenu;