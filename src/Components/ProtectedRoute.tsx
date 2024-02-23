import React, { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: Props) => {
  const { user, userChecked } = useContext(AuthContext);
  return userChecked ? (
    user ? (
      <>{children}</>
    ) : (
      <Navigate to={"/"} replace={true} />
    )
  ) : (
    <p>Checking Sign In Credentials...</p>
  );
};
export default ProtectedRoute;
