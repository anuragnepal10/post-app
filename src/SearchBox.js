import React from 'react'

const SearchBox = ({ setSearch, search }) => {
	return (
		<form action="" className="search-box" onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				placeholder="Search Posts..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	)
}

export default SearchBox
