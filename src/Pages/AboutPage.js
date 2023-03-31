import React from 'react'
import { useLocation } from 'react-router-dom'
import headerTitle from '../HeaderTitle'
const AboutPage = ({ setCurrentPage }) => {
	const { pathname } = useLocation()
	setCurrentPage(headerTitle(pathname))
	return (
		<section className="about">
			<p>
				This web app is designed to provide users with a platform to share their
				thoughts, ideas, and experiences with others in a convenient and
				user-friendly way.
			</p>
			<p>Created by Anurag Nepal</p>
			<a href="https://github.com/anuragnepal10?tab=repositories">
				My other Projects
			</a>
		</section>
	)
}

export default AboutPage
