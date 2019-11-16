import React, { useState } from "react";
import "./App.css";
import TeamMembers from "./TeamMembers";
import Forms from "./Forms";

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: "Bob",
      email: "email.com",
      role: "front-end"
    }
  ]);

  const addTeamMember = member => {
    const newMember = {
      id: Date.now(),
      title: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember({ ...teamMember, newMember });
  };
  return (
    <div className="App">
      <Forms teamMember={addTeamMember} />
      <TeamMembers teamMember={teamMember} />
    </div>
  );
}

export default App;
