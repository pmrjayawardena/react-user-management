import { USER_ACTION_TYPES } from '../actionTypes/userActionTypes';

const INITIAL_STATE = {
	users: [],
	currentPage: 1,
};
export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SET_USERS:
			return {
				...state,
				users: payload,
			};
		case USER_ACTION_TYPES.SET_META_DATA:
			return {
				...state,
				meta: payload,
			};

		case USER_ACTION_TYPES.SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: payload,
			};

		default:
			return state;
	}
};