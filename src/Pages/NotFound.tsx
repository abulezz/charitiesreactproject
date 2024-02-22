import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Error</h1>
      <button onClick={() => navigate(-1)}>Back...</button>
      <button onClick={() => navigate("/")}>Go Home...</button>
    </div>
  );
}

export default ErrorPage;
