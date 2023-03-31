import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import HomePage from './Pages/HomePage'
import PostPage from './Pages/PostPage'
import NewPostPage from './Pages/NewPostPage'
import AboutPage from './Pages/AboutPage'
import ErrorPage from './Pages/ErrorPage'

function App() {
	const [currentPage, setCurrentPage] = useState('Post App')
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout currentPage={currentPage} />,
			children: [
				{
					path: '/',
					element: <HomePage setCurrentPage={setCurrentPage} />,
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
