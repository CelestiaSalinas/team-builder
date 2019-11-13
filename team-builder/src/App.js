import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamMembers from "./TeamMember";

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: "Bob",
      email: "email.com",
      role: "front-end"
    }
  ]);
  return (
    <div className="App">
      <TeamMembers teamMember={teamMember} />
    </div>
  );
}

export default App;
