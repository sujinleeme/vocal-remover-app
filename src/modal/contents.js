export const modalContents = ({state}) => {
	const initState = {
		title: "",
		subtitle: "",
		facebook: "",
		google: "",
		bottom: "",
		button: "",
		nextView: ""
	}
	
	switch (state) {
		case "SIGN_IN":
			return {
				title: "Welcome back.",
				subtitle: "Sign in to make your karaoke vocal music and record your singing.",
				facebook: "Sign in with facebook",
				google: "Sign in with Google",
				bottom: "No account?",
				button: "Create one.",
				nextView: "SIGN_UP"
				
			}
		case "SIGN_UP":
			return {
				title: "Join!",
				subtitle: "Sign up to make your karaoke vocal music and record your singing.",
				facebook: "Sign up with facebook",
				google: "Sign up with Google",
				bottom: "Already have an account?",
				button: "Sign in.",
				nextView: "SIGN_IN"
			}
		default:
			return initState
	}
}
