import React from 'react'
import SearchBox from '../SearchBox'
import PostContainer from '../PostContainer'
import headerTitle from '../HeaderTitle'
// import { useLocation } from 'react-router-dom'

const HomePage = ({ setCurrentPage, posts, search, setSearch }) => {
	// const { pathname } = useLocation()
	// setCurrentPage(headerTitle(pathname))
	return (
		<>
			<SearchBox setSearch={setSearch} search={search} />
			<PostContainer posts={posts} search={search} />
		</>
	)
}

export default HomePage
