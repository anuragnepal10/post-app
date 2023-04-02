import Layout from './Layout'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

import HomePage from './Pages/HomePage'
import PostPage from './Pages/PostPage'
import NewPostPage from './Pages/NewPostPage'
import AboutPage from './Pages/AboutPage'
import ErrorPage from './Pages/ErrorPage'

function App() {
	const [currentPage, setCurrentPage] = useState('Post App')
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'My new App',
			date: '13:27 Apr 2, 2023',
			body: "Why do Americans have so many different types of towels? We have beach towels, hand towels, bath towels, dish towels, camping towels, quick-dry towels, and let’s not forget paper towels. Would 1 type of towel work for each of these things? Let’s take a beach towel. It can be used to dry your hands and body with no difficulty. A beach towel could be used to dry dishes. Just think how many dishes you could dry with one beach towel. I’ve used a beach towel with no adverse effects while camping. If you buy a thin beach towel it can dry quickly too. I’d probably cut up a beach towel to wipe down counters or for cleaning other items, but a full beach towel could be used too. Is having so many types of towels an extravagant luxury that Americans enjoy or is it necessary? I’d say it's overkill and we could cut down on the many types of towels that manufacturers deem necessary",
		},
		{
			id: 2,
			title: 'Express Js vs Django',
			date: '13:27 Apr 2, 2023',
			body: "Why do Americans have so many different types of towels? We have beach towels, hand towels, bath towels, dish towels, camping towels, quick-dry towels, and let’s not forget paper towels. Would 1 type of towel work for each of these things? Let’s take a beach towel. It can be used to dry your hands and body with no difficulty. A beach towel could be used to dry dishes. Just think how many dishes you could dry with one beach towel. I’ve used a beach towel with no adverse effects while camping. If you buy a thin beach towel it can dry quickly too. I’d probably cut up a beach towel to wipe down counters or for cleaning other items, but a full beach towel could be used too. Is having so many types of towels an extravagant luxury that Americans enjoy or is it necessary? I’d say it's overkill and we could cut down on the many types of towels that manufacturers deem necessary",
		},
		{
			id: 3,
			title: 'Future of AI',
			date: '13:27 Apr 2, 2023',
			body: "Why do Americans have so many different types of towels? We have beach towels, hand towels, bath towels, dish towels, camping towels, quick-dry towels, and let’s not forget paper towels. Would 1 type of towel work for each of these things? Let’s take a beach towel. It can be used to dry your hands and body with no difficulty. A beach towel could be used to dry dishes. Just think how many dishes you could dry with one beach towel. I’ve used a beach towel with no adverse effects while camping. If you buy a thin beach towel it can dry quickly too. I’d probably cut up a beach towel to wipe down counters or for cleaning other items, but a full beach towel could be used too. Is having so many types of towels an extravagant luxury that Americans enjoy or is it necessary? I’d say it's overkill and we could cut down on the many types of towels that manufacturers deem necessary",
		},
	])
	const [search, setSearch] = useState('')
	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		const filteredPosts = posts
			.filter(
				(post) =>
					post.body.toLowerCase().includes(search.toLowerCase()) ||
					post.title.toLowerCase().includes(search.toLowerCase())
			)
			.reverse()
		setSearchResults(filteredPosts)
	}, [posts, search])

	const router = createHashRouter([
		{
			path: '/',
			element: <Layout currentPage={currentPage} />,
			children: [
				{
					path: '/',
					element: (
						<HomePage
							posts={searchResults}
							setCurrentPage={setCurrentPage}
							search={search}
							setSearch={setSearch}
						/>
					),
				},
				{
					path: 'post',
					element: <NewPostPage setCurrentPage={setCurrentPage} />,
				},
				{
					path: 'post/:id',
					element: <PostPage setCurrentPage={setCurrentPage} />,
				},
				{
					path: 'about',
					element: <AboutPage setCurrentPage={setCurrentPage} />,
				},
				{
					path: '*',
					element: (
						<ErrorPage setCurrentPage={setCurrentPage} message={'Error'} />
					),
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
