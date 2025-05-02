import React from "react";
import ChatBox from "./components/ChatBox";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>ChatFURIA 💬</h1>
      <ChatBox />
    </div>
  );
}
