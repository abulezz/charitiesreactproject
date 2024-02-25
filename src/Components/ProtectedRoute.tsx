import React, { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
import { Navigate } from "react-router-dom";
import {AuthContextV2} from "./AuthContxtV2";

const ProtectedRoute = ({ children }: Props) => {
  const user = useContext(AuthContextV2);
  return user ? (
      <>{children}</>
    ) : (
      <Navigate to={"/"} replace={true} />
  )
};
export default ProtectedRoute;
