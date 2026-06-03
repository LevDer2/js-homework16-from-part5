import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Section() {
  const { title } = useContext(AuthContext);
  return <h1 className="title">{title}</h1>;
}
