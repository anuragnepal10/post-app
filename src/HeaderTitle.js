export const headerTitle = (pathname) => {
	switch (pathname) {
		case '/':
			return 'Post App'
		case '/post':
			return 'Create New Post'
		case '/about':
			return 'About'
		default:
			return 'Post App'
	}
}

export default headerTitle
