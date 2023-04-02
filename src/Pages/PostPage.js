import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'

const PostPage = ({ posts, handleDelete }) => {
	const navigate = useNavigate()
	const { id } = useParams()
	const post = posts.find((post) => post.id === id.toString())
	return (
		<>
			<Header headerTitle={'Post App'} />
			<main>
				{post ? (
					<>
						<h2 className="post-title">{post.title}</h2>
						<small className="post-date">{post.date}</small>
						<p className="post-body">{post.body} </p>
						<hr />
						<button
							className="btn delete-btn"
							onClick={() => {
								handleDelete(post.id)
								navigate('/')
							}}
						>
							Delete this post
						</button>
						<Link to="/" className="Link">
							<button className="btn back-btn">Go back</button>
						</Link>
					</>
				) : (
					<p className="error-message">This Post doesn't exist.</p>
				)}
			</main>
			<Navbar currentPage={'home'} />
		</>
	)
}

export default PostPage
