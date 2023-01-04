
import Auth from '../../../utils/authService';
const authService = new Auth()
export const SignIn = async (data) => await authService.SignIn({username: data.username, password: data.password});
