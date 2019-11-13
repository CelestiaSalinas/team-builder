import React, { useState } from "react";
function Forms(props) {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.teamMember(member);
    setMember({ name: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <br />
      <label htmlFor="email">Email </label>
      <input id="email" type="text" name="email" value={member.name} />
      <br />
      <label htmlFor="role">Role </label>
      <select id="role" name="role" onChange={handleChanges}>
        <option></option>
        <option>Frontend Engineer</option>
        <option>Backend Engineer</option>
        <option>Frontend Engineer</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms;
