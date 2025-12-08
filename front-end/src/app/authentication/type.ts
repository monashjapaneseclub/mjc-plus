export interface AuthFormState {
  email: string;
  password: string;
  emailError: string | undefined;
  passwordError: string | undefined;
}

export interface AuthFormAction {
  type: string;
  key: string;
  value: string;
}