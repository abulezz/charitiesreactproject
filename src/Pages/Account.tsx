import { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../Components/AuthContext";

const Account = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    // nothing happening here yet
    logout();
  };
  return (
    <>
      <h1>My Account</h1>

      <Button onClick={handleLogout}>logout</Button>
    </>
  );
};

export default Account;
