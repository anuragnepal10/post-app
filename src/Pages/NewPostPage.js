import React from 'react'
import { useLocation } from 'react-router-dom'
import headerTitle from '../HeaderTitle'

const NewPostPage = ({ setCurrentPage }) => {
	const { pathname } = useLocation()
	setCurrentPage(headerTitle(pathname))
	return (
		<form action="" className="post-form">
			<fieldset className="title">
				<label htmlFor="title-input">Give your post a title</label>
				<input
					type="text"
					required
					autoFocus
					placeholder="eg: My new App"
					class="title-input"
					name="title-input"
				/>
			</fieldset>
			<fieldset className="body">
				<label htmlFor="body-input">Describe your post</label>
				<textarea
					required
					name="body-input"
					className="body-input card"
				></textarea>
			</fieldset>
			<button className="btn" type="submit">
				Publish this post
			</button>
		</form>
	)
}

export default NewPostPage
