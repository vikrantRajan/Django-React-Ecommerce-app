
import Auth from '../../../utils/authService';
const authService = new Auth()
export const requestValidate = async (data) => await authService.Validate(data);
