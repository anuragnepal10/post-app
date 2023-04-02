import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'

const NewPostPage = ({ handleSubmit }) => {
	const titleRef = useRef(null)
	const bodyRef = useRef(null)
	const navigate = useNavigate()
	return (
		<>
			<Header headerTitle={'Create New Post'} />
			<main>
				<form
					action=""
					className="post-form"
					onSubmit={(e) => {
						e.preventDefault()
						handleSubmit(titleRef.current.value, bodyRef.current.value)
						navigate('/')
					}}
				>
					<fieldset className="title">
						<label htmlFor="title-input">Give your post a title</label>
						<input
							type="text"
							required
							placeholder="eg: My new App"
							className="title-input"
							name="title-input"
							ref={titleRef}
						/>
					</fieldset>
					<fieldset className="body">
						<label htmlFor="body-input">Describe your post</label>
						<textarea
							required
							name="body-input"
							className="body-input card"
							ref={bodyRef}
						></textarea>
					</fieldset>
					<button className="btn" type="submit">
						Publish this post
					</button>
				</form>
			</main>
			<Navbar currentPage={'new'} />
		</>
	)
}

export default NewPostPage
