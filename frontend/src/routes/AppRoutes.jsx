import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import CustomerLayout from '../layouts/CustomerLayout'
import PublicLayout from '../layouts/PublicLayout'
import AddProduct from '../pages/admin/AddProduct'
import AdminCategories from '../pages/admin/Categories'
import Customers from '../pages/admin/Customers'
import Dashboard from '../pages/admin/Dashboard'
import EditProduct from '../pages/admin/EditProduct'
import AdminOrders from '../pages/admin/Orders'
import AdminProducts from '../pages/admin/Products'
import ForgotPassword from '../pages/auth/ForgotPassword'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ResetPassword from '../pages/auth/ResetPassword'
import VerifyOTP from '../pages/auth/VerifyOTP'
import Home from '../pages/public/Home'
import PagePlaceholder from '../pages/PagePlaceholder'
import ProtectedRoute from './ProtectedRoute'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route
          path="cart"
          element={
            <PagePlaceholder
              title="Shopping cart"
              description="Review the items in your cart before checkout."
              actionTo="/checkout"
              actionLabel="Continue to checkout"
            />
          }
        />
        <Route path="products" element={<PagePlaceholder title="Products" description="Browse our complete product collection." />} />
        <Route path="products/:productId" element={<PagePlaceholder title="Product details" description="View product information and add it to your cart." />} />
        <Route path="categories" element={<PagePlaceholder title="Categories" description="Browse products by category." />} />
        <Route path="categories/:categoryId" element={<PagePlaceholder title="Category products" description="Explore products in this category." />} />
      </Route>

      <Route element={<ProtectedRoute><CustomerLayout /></ProtectedRoute>}>
        <Route path="account" element={<PagePlaceholder title="My account" />} />
        <Route path="account/profile" element={<PagePlaceholder title="Profile" />} />
        <Route path="account/addresses" element={<PagePlaceholder title="Addresses" />} />
        <Route path="account/orders" element={<PagePlaceholder title="My orders" />} />
        <Route path="account/orders/:orderId" element={<PagePlaceholder title="Order details" />} />
        <Route path="account/reviews" element={<PagePlaceholder title="My reviews" />} />
        <Route path="checkout" element={<PagePlaceholder title="Checkout" />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="verify-otp" element={<VerifyOTP />} />
      <Route path="forgotpassword" element={<Navigate to="/forgot-password" replace />} />
      <Route path="dashboard" element={<Navigate to="/admin" replace />} />

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/:productId/edit" element={<EditProduct />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route
          path="orders/:orderId"
          element={
            <PagePlaceholder
              title="Order details"
              description="Review this order's information."
              backTo="/admin/orders"
              backLabel="Back to orders"
            />
          }
        />
        <Route path="customers" element={<Customers />} />
        <Route
          path="customers/:customerId"
          element={
            <PagePlaceholder
              title="Customer details"
              description="Review this customer's account information."
              backTo="/admin/customers"
              backLabel="Back to customers"
            />
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <PagePlaceholder
            title="Page not found"
            description="The page you're looking for doesn't exist."
            backTo="/"
            backLabel="Back to store"
          />
        }
      />
    </Routes>
  )
}

export default AppRoutes
