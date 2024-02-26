import { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../Components/AuthContext";
import { AuthService } from "../Components/AuthService";

const Account = () => {
  const authenticationService = new AuthService();
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    authenticationService.logout();
  };
  return (
    <>
      <h3>My Account</h3>

      <Button onClick={handleLogout}>logout</Button>
    </>
  );
};

export default Account;
