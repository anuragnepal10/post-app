import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

const NewPostPage = () => {
	return (
		<>
			<Header headerTitle={'Create New Post'} />
			<main>
				<form action="" className="post-form">
					<fieldset className="title">
						<label htmlFor="title-input">Give your post a title</label>
						<input
							type="text"
							required
							placeholder="eg: My new App"
							className="title-input"
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
			</main>
			<Navbar currentPage={'new'} />
		</>
	)
}

export default NewPostPage
