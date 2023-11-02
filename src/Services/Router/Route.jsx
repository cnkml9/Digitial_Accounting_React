import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { CookieHelper } from '../../Utilities/Helpers/tokenInjector';
import LoginPage from '../../Pages/Login';
import SignUp from '../../Pages/Register';
import HomePage from '../../Pages/Home';
import SaleBillsPage from '../../Pages/Sales/SalesBills';
import WholeSaleInvoicesPage from '../../Pages/Sales/WholeSaleInvoices';
import RetailInvoicePage from '../../Pages/Sales/RetailInvoice';
import PurchaseBillsPage from '../../Pages/Purchases/PurchaseBills';
import NewPurchase from '../../Pages/Purchases/NewPurchase';
import ReturnInvoice from '../../Pages/purchases/ReturnInvoice';
import SalesOrder from '../../Pages/Sales/SalesOrder';
import WholeSaleOrderPage from '../../Pages/Sales/WholeSaleOrder';
import RetailOrderPage from '../../Pages/Sales/RetailOrder';
import PurchaseOrder from '../../Pages/purchases/PurchaseOrder';
import NewPurchaseOrder from '../../Pages/purchases/NewPurchaseOrder';
import CustomersPage from '../../Pages/Customers/Customers';
import AddCustomerPage from '../../Pages/Customers/AddCustomer';
import AddItemPage from '../../Pages/StocksAndServices/AddItem';
import AddServiceItemPage from '../../Pages/StocksAndServices/ServicesItemPage';
import AddBrandOrCategoryPage from '../../Pages/StocksAndServices/AddBrandOrCategory';
import ServicesPage from '../../Pages/StocksAndServices/Services';
import ProductsPage from '../../Pages/StocksAndServices/Products';
import SettingsCompanyInfoPage from '../../Pages/Settings/SettingsPage';
import ExpensesPage from '../../Pages/Expenses/Expenses';
import AddExpensesPage from '../../Pages/Expenses/AddExpenses';
import VaultsPage from '../../Pages/Vault/Vaults';

const PrivateRoute = () => {
    return CookieHelper.CheckCredentialsFromCookie() ? <Outlet /> : <Navigate to="/auth/login" />;
}


const RouterComponent = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/auth/login' element={<LoginPage />} />
            <Route path='/auth/register' element={<SignUp />} />
            <Route path="/vaults" element={<VaultsPage />} />
            <Route element={<PrivateRoute />}>
                <Route path='*' element={<HomePage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/invoices/'>
                    <Route path='/invoices/sales' element={<SaleBillsPage />} />
                    <Route
                        exact
                        path="/invoices/sales/wholesale/add/"
                        element={<WholeSaleInvoicesPage />}
                    />
                    <Route
                        exact
                        path="/invoices/sales/retail/add"
                        element={<RetailInvoicePage />}
                    />
                    <Route
                        exact
                        path="/invoices/purchases/"
                        element={<PurchaseBillsPage />}
                    />
                    <Route
                        exact
                        path="/invoices/purchases/add"
                        element={<NewPurchase />}
                    />
                    <Route
                        exact
                        path="/invoices/purchases/return"
                        element={<ReturnInvoice />}
                    />
                </Route>
                <Route path='/orders/' >
                    <Route exact path="/orders/sales/" element={<SalesOrder />} />
                    <Route
                        exact
                        path="/orders/sales/wholesale/add"
                        element={<WholeSaleOrderPage />}
                    />
                    <Route
                        exact
                        path="/orders/sales/retail/add"
                        element={<RetailOrderPage />}
                    />
                    <Route exact path="/orders/purchases/" element={<PurchaseOrder />} />
                    <Route
                        exact
                        path="/orders/purchases/add"
                        element={<NewPurchaseOrder />}
                    />
                </Route>
                <Route path="/customers/">
                    <Route exact path="/customers/" element={<CustomersPage />} />
                    <Route exact path="/customers/add/" element={<AddCustomerPage />} />
                    <Route
                        exact
                        path="/customers/preview/:id"
                        element={<AddCustomerPage />}
                    />
                </Route>
                <Route path="/products/">
                    <Route exact path="/products/add/" element={<AddItemPage />} />
                    <Route exact path="/products/" element={<ProductsPage />} />

                    <Route
                        path="/products/brands-category/add"
                        element={<AddBrandOrCategoryPage />}
                    />
                </Route>
                <Route path="/services/">
                    <Route exact path="/services/" element={<ServicesPage />} />
                    <Route
                        exact
                        path="/services/add"
                        element={<AddServiceItemPage />}
                    />
                </Route>
                <Route path="/expenses/">
                    <Route exact path="/expenses/" element={<ExpensesPage />} />
                    <Route
                        exact
                        path="/expenses/add"
                        element={<AddExpensesPage />}
                    />
                </Route>
                <Route path="/settings/">
                    <Route
                        exact
                        path="/settings/account/company-information/"
                        element={<SettingsCompanyInfoPage />}
                    />
                </Route>
            </Route>
        </>

    )
)
export default RouterComponent;