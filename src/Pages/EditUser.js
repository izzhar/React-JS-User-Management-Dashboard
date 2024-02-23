import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContextr";
import "./EditUser.css";

function EditUser() {
  const { id } = useParams();
  const { users, editUser } = useContext(UserContext);
  const user = users.find((user) => user.id === parseInt(id));
  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !role) {
      setErrors({ message: "All fields are required" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ message: "Invalid email address" });
      return;
    }

    const updatedUser = { id: parseInt(id), username, email, role };
    editUser(updatedUser);
    navigate(`/user/${id}`);
  };

  return (
    <div className="edit-user-container">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit} className="edit-user-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="edit-input"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="edit-input"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="edit-select"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit" className="edit-submit-button">
          Save Changes
        </button>
      </form>
      {errors.message && <p className="edit-error-message">{errors.message}</p>}
    </div>
  );
}

export default EditUser;
