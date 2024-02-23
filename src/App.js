import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";
import CreateUser from "./Pages/CreateUser";
import NotFound from "./Pages/NotFound";
import EditUser from "./Pages/EditUser";
import { UserProvider } from "./context/UserContextr";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/user/:id/edit" element={<EditUser />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
