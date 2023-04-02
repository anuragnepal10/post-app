import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

const ErrorPage = ({ message }) => {
	return (
		<>
			<Header headerTitle={'Post App'} />
			<main>
				<p className="error-message">{message}</p>
			</main>
			<Navbar currentPage={'home'} />
		</>
	)
}

export default ErrorPage
