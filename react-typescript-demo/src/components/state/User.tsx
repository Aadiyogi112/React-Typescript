import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const loginHandler = () => {
    setUser({ name: "Abhishek", email: "tLw9n@example.com" });
  };
  const logoutHandler = () => {
    setUser({} as AuthUser);
  };
  return (
    <div>
      <div>
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>
      </div>
    </div>
  );
};

export default User;
