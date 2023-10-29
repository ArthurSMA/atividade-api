import React, { useState, useEffect } from "react";
import Usuario from "./Usuario";

const URL_API = "http://localhost:9090/api/usuarios";

export default function Home() {
  return <>
    <Usuario />
  </>
}