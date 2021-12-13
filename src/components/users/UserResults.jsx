import { useEffect, useState } from 'react'

export default function UserResults() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = async () => {
		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
			headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
		})

		const data = await response.json()

		setUsers(data)
		setLoading(false)
	}

	if (!loading) {
		return (
			<div className='user-results'>
				{users.map((user) => (
					<div className='user-result' key={user.id}>
						<img src={user.avatar_url} alt={user.login} />
						<a href={user.html_url}>{user.login}</a>
					</div>
				))}
			</div>
		)
	} else {
		return <h3>Loading...</h3>
	}
}
