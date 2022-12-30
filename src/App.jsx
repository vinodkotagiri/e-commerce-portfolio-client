import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoutes, Header, Footer } from './components/'
import { Home, Login, Register, Cart, ProductDetails, ProductList, NotFound } from './pages'
import { UserCartDetails, UserOrders, UserProfile, UserOrderDetails } from './pages/user'
import {
	AdminAnalytics,
	AdminChats,
	AdminCreateProduct,
	AdminEditProduct,
	AdminEditUsers,
	AdminOrderDetails,
	AdminOrders,
	AdminProducts,
	AdminUsers,
} from './pages/admin'
import { RoutesWithUserChatComponent } from './components/user'
export default function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route element={<RoutesWithUserChatComponent />}>
					<Route path='/' element={<Home />} />
					<Route path='/product-list' element={<ProductList />} />
					<Route path='/product-details/:id' element={<ProductDetails />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<NotFound />} />

					{/* protected user routes */}
					<Route element={<ProtectedRoutes admin={false} />}>
						<Route path='/user' element={<UserProfile />} />
						<Route path='/user/my-orders' element={<UserOrders />} />
						<Route path='/user/cart-details' element={<UserCartDetails />} />
						<Route path='/user/order-details' element={<UserOrderDetails />} />
					</Route>
				</Route>
				{/* protected admin routes */}
				<Route element={<ProtectedRoutes admin={true} />}>
					<Route path='/admin/users' element={<AdminUsers />} />
					<Route path='/admin/edit-user' element={<AdminEditUsers />} />
					<Route path='/admin/products' element={<AdminProducts />} />
					<Route path='/admin/create-new-product' element={<AdminCreateProduct />} />
					<Route path='/admin/edit-product' element={<AdminEditProduct />} />
					<Route path='/admin/orders' element={<AdminOrders />} />
					<Route path='/admin/order-details' element={<AdminOrderDetails />} />
					<Route path='/admin/chats' element={<AdminChats />} />
					<Route path='/admin/analytics' element={<AdminAnalytics />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	)
}
