import React from 'react'
import Post from './Post'

const PostContainer = ({ posts, search }) => {
	return (
		<section className="post-card-container">
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</section>
	)
}

export default PostContainer
