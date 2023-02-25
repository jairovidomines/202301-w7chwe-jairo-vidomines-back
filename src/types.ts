export interface UserStructure {
  username: string;
  avatar: string;
}

export interface UserCredentialsStructure extends UserStructure {
  password: string;
  email: string;
}
