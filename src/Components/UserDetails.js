import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../context/UserContextr";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";

function UserDetails() {
  const { id } = useParams();
  const { users, deleteUser } = useContext(UserContext);
  const user = users.find((user) => user.id === parseInt(id));
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteUser(parseInt(id));
    navigate("/");
  };

  if (!user) {
    return <div className="user-details-container">User not found</div>;
  }
  console.log(users);

  console.log(users);
  console.log(id);
  return (
    <div className="user-details-container">
      <h1>User Details</h1>
      <div className="user-details-card">
        <p>ID: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <Link to={`/user/${id}/edit`} className="edit-link">
          Edit
        </Link>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
        <Link to="/" className="back-button">
          Back to User List
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;
