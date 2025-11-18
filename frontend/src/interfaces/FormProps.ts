interface BaseFormProps {
  index: number;
  inputs: {
    [key: string]: string;
  };
}

export interface LoginFormProps extends BaseFormProps {
  type: "login";
}

export interface RegisterFormProps extends BaseFormProps {
  type: "register";
}

export interface User {
  uuid: string;
  username: string;
  email: string;
  password_hash: string;
  permission: string;
}