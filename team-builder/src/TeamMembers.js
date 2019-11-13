import React from "react";
function TeamMembers(props) {
  return (
    <div>
      {props.teamMember.map(note => (
        <div>
          <h2>{note.name}</h2>
          <p>{note.email}</p>
          <p>{note.role}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamMembers;
