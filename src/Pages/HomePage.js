import React from 'react'
import SearchBox from '../SearchBox'
import PostContainer from '../PostContainer'
import headerTitle from '../HeaderTitle'
import { useLocation } from 'react-router-dom'

const HomePage = ({ setCurrentPage }) => {
	const { pathname } = useLocation()
	setCurrentPage(headerTitle(pathname))
	return (
		<>
			<SearchBox />
			<PostContainer />
		</>
	)
}

export default HomePage
