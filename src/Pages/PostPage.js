import React from 'react'
import { Link } from 'react-router-dom'
import headerTitle from '../HeaderTitle'
import { useLocation } from 'react-router-dom'

const PostPage = ({ setCurrentPage }) => {
	const { pathname } = useLocation()
	setCurrentPage(headerTitle(pathname))
	return (
		<>
			<h2 className="post-title">A wonderful Life</h2>
			<small className="post-date">2023 July 21:43</small>
			<p className="post-body">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
				praesentium eos voluptatem, ex provident adipisci similique, iure,
				molestias repellat excepturi dicta reiciendis exercitationem iste sint?
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
				molestias repellendus culpa tempore quidem vero alias ab cum at
				temporibus excepturi blanditiis in expedita, distinctio fuga impedit
				reprehenderit obcaecati eius, ut dolorum id molestiae placeat libero?
				Distinctio alias iste reprehenderit cumque saepe in, blanditiis deserunt
				vitae mollitia qui laudantium quia?
			</p>
			<hr />
			<button className="btn delete-btn">Delete this post</button>
			<Link to="/" className="Link">
				<button className="btn back-btn">Go back</button>
			</Link>
		</>
	)
}

export default PostPage
