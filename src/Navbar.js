import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus, FaInfoCircle } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'

const Navbar = ({ currentPage }) => {
	const classFinder = (itemName) => {
		if (itemName === currentPage) {
			return 'nav-item selected'
		} else {
			return 'nav-item'
		}
	}

	return (
		<ul className="nav">
			<li className={classFinder('new')}>
				<Link className="nav-link" to="/post">
					<FaPlus className="nav-icon" />
					<p className="nav-text">New Post</p>
				</Link>
			</li>
			<li className={classFinder('home')}>
				<Link className="nav-link" to="/">
					<AiFillHome className="nav-icon" />
					<p className="nav-text">Home</p>
				</Link>
			</li>
			<li className={classFinder('about')}>
				<Link className="nav-link" to="/about">
					<FaInfoCircle className="nav-icon" />
					<p className="nav-text">About</p>
				</Link>
			</li>
		</ul>
	)
}

export default Navbar
