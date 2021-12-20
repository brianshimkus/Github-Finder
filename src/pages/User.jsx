import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GuthubContext from '../context/github/GithubContext'

export default function User() {
	const { getUser, user } = useContext(GuthubContext)

	const params = useParams()

	useEffect(() => {
		getUser(params.login)
	}, [])
	return <div>{user.login}</div>
}
