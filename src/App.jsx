import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectPage from "./pages/project/ProjectPage";
import ProjectSingle from "./components/ProjectSingle/ProjectSingle";
import BlogPage from "./pages/blog/BlogPage";
import ShopItem from "./pages/shop/index";
import ItemDetail from "./pages/shop/ItemDetail";
import QuotationPage from "./pages/quotation/QuotationPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import BlogDetailPage from "./pages/blog-detail/BlogDetailPage";
import { PAGE_ROUTES } from "./utils/constant";
import StaffRole from "./module/staff";
import StaffProjects from "./module/staff/Projects";
import StaffQuotation from "./module/staff/Quotation";
import StaffProducts from "./module/staff/Products/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/project-single" element={<ProjectSingle />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/quotation" element={<QuotationPage />} />
      <Route path="/shop" element={<ShopItem />} />
      <Route path="/shop/item/:productId" element={<ItemDetail />} />
      <Route path="/login" index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route path={PAGE_ROUTES.STAFF.MAIN} element={<StaffRole />}>
        <Route path={PAGE_ROUTES.STAFF.PROJECTS} element={<StaffProjects />} />
        <Route
          path={PAGE_ROUTES.STAFF.QUOTATIONS}
          element={<StaffQuotation />}
        />
        <Route path={PAGE_ROUTES.STAFF.PRODUCTS} element={<StaffProducts />} />
      </Route>
    </Routes>
  );
}
export default App;
