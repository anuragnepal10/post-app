import { createHashRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

import HomePage from './Pages/HomePage'
import PostPage from './Pages/PostPage'
import NewPostPage from './Pages/NewPostPage'
import AboutPage from './Pages/AboutPage'
import ErrorPage from './Pages/ErrorPage'
import EditPostPage from './Pages/EditPostPage'

function App() {
	const defaultPosts = [
		{
			id: '1',
			date: '11:59 PM - Apr 1, 2023',
			title: 'Artificial Intelligence',
			body: 'Artificial Intelligence (AI) has been a rapidly growing field in recent years, and it is expected to continue expanding into the future. The possibilities of AI are virtually endless, as it has the potential to revolutionize numerous industries and aspects of daily life. One potential future for AI is in healthcare. AI-powered diagnostic tools and predictive models could help identify illnesses earlier and more accurately, leading to better outcomes for patients. In addition, AI-powered robotics could assist with surgeries and physical therapy, reducing the strain on healthcare workers.',
		},
		{
			id: '2',
			date: '11:59 PM - Apr 1, 2023',
			title: 'Android vs iOS',
			body: `Android offers a wider range of devices, from high-end smartphones to budget-friendly models. It is an open-source operating system, which means that developers have access to the source code and can modify it as per their requirements. This results in a vast selection of apps available on the Google Play Store. On the other hand, iOS is exclusive to Apple's devices and offers a more streamlined and cohesive user experience. The App Store on iOS is known for its strict policies, resulting in a smaller but more curated selection of apps.`,
		},
		{
			id: '3',
			date: '11:59 PM - Apr 1, 2023',
			title: 'Raspberry Pi',
			body: 'Raspberry Pi is a small, affordable, and versatile computer that has revolutionized the world of DIY computing. Developed by the Raspberry Pi Foundation, it is a credit-card sized computer that can be used for a wide range of projects, including home automation, robotics, media centers, and even as a desktop computer. One of the key features of the Raspberry Pi is its low cost. The basic model can be purchased for less than $50, making it accessible to a wide range of people. Despite its low cost, the Raspberry Pi is a powerful computer that can run a variety of operating systems, including Linux and Windows 10 IoT Core.',
		},
	]

	const [posts, setPosts] = useState(
		localStorage.getItem('posts')
			? JSON.parse(localStorage.getItem('posts'))
			: defaultPosts
	)
	const [search, setSearch] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleDelete = (id) => {
		const newPosts = posts.filter((post) => post.id !== id)
		setPosts(newPosts)
	}

	const handleSubmit = (title, body) => {
		const date = format(new Date(), 'h:mm a - MMM d, yyyy')
		const newPost = {
			id: posts.length
				? (parseInt(posts[posts.length - 1].id) + 1).toString()
				: '1',
			date: date,
			title: title,
			body: body,
		}
		const newPosts = [...posts, newPost]
		setPosts(newPosts)
	}

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts))
	}, [posts])

	useEffect(() => {
		const filteredPosts = posts.length
			? posts
					.filter((post) =>
						post.title.toLowerCase().includes(search.toLowerCase())
					)
					.reverse()
			: []
		setSearchResults(filteredPosts)
	}, [posts, search])

	const router = createHashRouter([
		{
			path: '/',
			element: (
				<HomePage posts={searchResults} search={search} setSearch={setSearch} />
			),
		},
		{
			path: 'post',
			element: <NewPostPage handleSubmit={handleSubmit} />,
		},
		{
			path: 'post/:id',
			element: <PostPage posts={posts} handleDelete={handleDelete} />,
		},
		{
			path: 'about',
			element: <AboutPage />,
		},
		{
			path: '*',
			element: <ErrorPage message={'Error: Page Not Found'} />,
		},
	])

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App
