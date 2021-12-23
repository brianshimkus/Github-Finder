const githubReducer = (state, actions) => {
	switch (actions.type) {
		case 'GET_USERS':
			return {
				...state,
				users: actions.payload,
				loading: false,
			}
		case 'GET_USER_AND_REPOS':
			return {
				...state,
				user: actions.payload.user,
				repos: actions.payload.repos,
				loading: false,
			}
		case 'SET_LOADING':
			return {
				...state,
				loading: true,
			}
		case 'CLEAR_USERS':
			return {
				...state,
				users: [],
			}
		default:
			return state
	}
}

export default githubReducer
