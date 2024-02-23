import React, { useContext, useState } from "react";
import "./UserList.css"; // Import CSS file

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContextr";

function UserList() {
  const { users, deleteUser } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="user-list-container">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "24px",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        User List
      </h1>
      <button style={buttonStyle}>
        <Link to="/create" style={linkStyle}>
          Create User
        </Link>
      </button>
      <ul>
        {currentUsers.map((user) => (
          <li key={user.id} className="user-card">
            <Link to={`/user/${user.id}`}>
              {user.username} - Email: {user.email} - Role: {user.role}
            </Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default UserList;

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginBottom: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
};
