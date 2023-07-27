import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}


