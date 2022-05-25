export interface FEUser {
	username: string;
	name: string;
	email: string;
	admin: boolean;
}
export interface User extends FEUser {
	pswHash: string;
  }
  
  export interface LoginRequest {
	username: string;
	password: string;
  }
