import React from 'react'
import SearchBox from '../SearchBox'
import PostContainer from '../PostContainer'
import Header from '../Header'
import Navbar from '../Navbar'

const HomePage = ({ posts, search, setSearch }) => {
	return (
		<>
			<Header headerTitle={'Post App'} />
			<main>
				<SearchBox setSearch={setSearch} search={search} />
				{posts.length ? (
					<PostContainer posts={posts} search={search} />
				) : (
					<p className="error-message">No Posts Found</p>
				)}
			</main>
			<Navbar currentPage={'home'} />
		</>
	)
}

export default HomePage
