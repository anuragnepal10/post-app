import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
	return (
		<Link className="post-card card Link" to="Post/2">
			<h2 className="post-card-title">A wonderful Life</h2>
			<small className="post-card-date">2023 July 13 23:44</small>
			<p className="post-card-body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit...
			</p>
		</Link>
	)
}

export default Post
