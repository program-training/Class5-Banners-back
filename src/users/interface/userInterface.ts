export interface UserInterface {
  username: string;
  email: string;
  password?: string;
  password_hash?: string;
  isAdmin: boolean;
}
