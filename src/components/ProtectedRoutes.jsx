import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes({ admin }) {
	let auth = false
	if (admin) {
		let adminAuth = true
		if (adminAuth) auth = true
	} else {
		let userAuth = true
		if (userAuth) auth = true
	}
	return auth ? <Outlet /> : <Navigate to='/login' />
}
