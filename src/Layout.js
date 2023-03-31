import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = ({ currentPage }) => {
	return (
		<div className="App">
			<Header headerTitle={currentPage} />
			<main>
				<Outlet />
			</main>
			<Navbar currentPage={currentPage} />
		</div>
	)
}

export default Layout
