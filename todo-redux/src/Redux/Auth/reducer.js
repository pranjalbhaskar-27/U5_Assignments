import { LOGIN_SUCCESSFUL } from "./action";

const initialState = { auth: localStorage.getItem("auth") || "" };
export const authReducer = (store = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_SUCCESSFUL: {
			localStorage.setItem("auth", payload);
			return { ...store, auth: payload };
		}
		default:
			return store;
	}
};
