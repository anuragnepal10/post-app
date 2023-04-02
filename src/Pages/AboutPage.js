import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

const AboutPage = () => {
	return (
		<>
			<Header headerTitle={'About'} />
			<main>
				<section className="about">
					<p>
						This web app is designed to provide users with a platform to share
						their thoughts, ideas, and experiences with others in a convenient
						and user-friendly way.
					</p>
					<p>Created by Anurag Nepal</p>
					<a href="https://github.com/anuragnepal10?tab=repositories">
						My other Projects
					</a>
				</section>
			</main>
			<Navbar currentPage={'about'} />
		</>
	)
}

export default AboutPage
