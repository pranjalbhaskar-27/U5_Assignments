export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";

export const addToken = (token) => {
	return { type: LOGIN_SUCCESSFUL, payload: token.token };
};
