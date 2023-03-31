import React from 'react'
import headerTitle from '../HeaderTitle'
import { useLocation } from 'react-router-dom'

const ErrorPage = ({ message, setCurrentPage }) => {
	const { pathname } = useLocation()
	setCurrentPage(headerTitle(pathname))

	return <p className="error-message">{message}</p>
}

export default ErrorPage
