import Home from "../pages/Home";
import About from "../pages/About";
import Food from "../pages/Food";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ChangePassword from "../pages/ForgotPassword/ChangePassword";
import ForgotPassword from "../pages/ForgotPassword";
import News from "../pages/News";
import Register from "../pages/Register";
import AddAccount from "../pages/Register/AddAccount";
import FoodDetail from "../pages/Food/FoodDetail";
import Cart from "../pages/Cart";
import Purchase from "../pages/Purchase";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentFail from "../pages/Payment/PaymentFail";
import Test from "../Test";

const publicRoutes = [
    {path: '/*', component: <Home />},
    {path: '/about/*', component: <About />},
    {path: '/food/*', component: <Food />},
    {path: '/fooddetail/:id/*', component: <FoodDetail />},
    {path: '/news/*', component: <News />},
    {path: '/contact/*', component: <Contact />},
    {path: '/purchase/*', component: <Purchase />},
    {path: '/cart/*', component: <Cart />},
    {path: '/login/*', component: <Login />},
    {path: '/register/*', component: <Register />},
    {path: '/addaccount/*', component: <AddAccount />},
    {path: '/changepassword/*', component: <ChangePassword />},
    {path: '/forgotpassword/*', component: <ForgotPassword />},
    {path: '/payment/*', component: <Payment />},
    {path: '/paymentsuccess/*', component: <PaymentSuccess />},
    {path: '/paymentfail/*', component: <PaymentFail />},
    {path: '/test/*', component: <Test />},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}