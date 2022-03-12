import React from "react";

import "./errorMessage.scss"

export default function ErrorMessage({
  message = "An error had ocurred when trying to get the user, try again in some minutes",
}) {
  return <h2 className="errorMessage">{message}</h2>;
}
