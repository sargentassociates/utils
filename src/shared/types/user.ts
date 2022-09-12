export interface BasicFEUser {
	username: string;
	name: string;
}
export interface FEUser extends BasicFEUser {
	email: string;
	admin: boolean;
}
export interface BasicUser extends BasicFEUser {
	pswHash: string;
}
export interface User extends FEUser {
	pswHash: string;
}
  
export interface LoginRequest {
	username: string;
	password: string;
}
