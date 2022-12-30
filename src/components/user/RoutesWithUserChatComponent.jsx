import React from 'react'
import { Outlet } from 'react-router-dom'
import UserChat from './UserChat'
export default function RoutesWithUserChatComponent() {
	return (
		<>
			<UserChat />
			<Outlet />
		</>
	)
}
