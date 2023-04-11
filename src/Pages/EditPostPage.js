import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'

const EditPostPage = ({
	posts,
	editTitle,
	setEditTitle,
	editBody,
	setEditBody,
	handleEdit,
}) => {
	const { id } = useParams()
	const post = posts.find((post) => post.id === id)
	const titleRef = useRef(null)
	const bodyRef = useRef(null)
	const navigate = useNavigate()

	useEffect(() => {
		if (post) {
			setEditTitle(post.title)
			setEditBody(post.body)
		}
	}, [post, setEditBody, setEditTitle])

	return (
		<>
			<Header headerTitle={'Edit Post'} />
			<main>
				{post ? (
					<>
						<form
							action=""
							className="post-form"
							onSubmit={(e) => {
								e.preventDefault()
								handleEdit(id)
								navigate('/post/' + id)
							}}
						>
							<fieldset className="title">
								<label htmlFor="title-input">Give your post a title</label>
								<input
									value={editTitle}
									type="text"
									required
									placeholder="eg: My new App"
									className="title-input"
									name="title-input"
									ref={titleRef}
									onChange={(e) => setEditTitle(e.target.value)}
								/>
							</fieldset>
							<fieldset className="body">
								<label htmlFor="body-input">Describe your post</label>
								<textarea
									value={editBody}
									required
									name="body-input"
									className="body-input card"
									ref={bodyRef}
									onChange={(e) => setEditBody(e.target.value)}
								></textarea>
							</fieldset>
							<button className="btn" type="submit">
								Publish this post
							</button>
						</form>
					</>
				) : (
					<p className="error-message">This Post doesn't exist.</p>
				)}
			</main>
			<Navbar currentPage={'new'} />
		</>
	)
}

export default EditPostPage
