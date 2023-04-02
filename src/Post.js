import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
	return (
		<Link className="post-card card Link" to={`post/${post.id}`}>
			<h2 className="post-card-title">{post.title}</h2>
			<small className="post-card-date">{post.date}</small>
			<p className="post-card-body">
				{post.body.length <= 25
					? post.body
					: post.body.split(' ').slice(0, 5).join(' ') + '...'}
			</p>
		</Link>
	)
}

export default Post
