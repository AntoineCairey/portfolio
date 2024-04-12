import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import data from "./data.yml";

export default function App() {
  const [lang, setLang] = useState("fr");

  return (
    <>
      <Outlet context={{ data, lang, setLang }} />
      <ScrollRestoration />
    </>
  );
}
