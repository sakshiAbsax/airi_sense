import React from "react";
import { Link } from "react-router-dom";
 import './page.css'
export const PageNotFound = () => {
  return (
    <div>
      <div class="section">
        <h1 class="error">404</h1>
        <div class="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link class="back-home" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
};
