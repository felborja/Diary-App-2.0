import React from "react";
import Button from "./Button";

// Navbar component to display the navigation bar
export default function Navbar({ openModal }) {
  return (
    <nav className="flex gap-10 justify-around items-center">
      <span className="text-xl">Welcome to Diary App</span>
      <Button onClick={openModal} />
    </nav>
  );
}
