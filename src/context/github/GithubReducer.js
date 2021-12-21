const githubReducer = (state, actions) => {
	switch (actions.type) {
		case 'GET_USERS':
			return {
				...state,
				users: actions.payload,
				loading: false,
			}
		case 'GET_USER':
			return {
				...state,
				user: actions.payload,
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
		case 'GET_REPOS':
			return {
				...state,
				repos: actions.payload,
				loading: false,
			}
		default:
			return state
	}
}

export default githubReducer
