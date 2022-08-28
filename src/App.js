import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar.component"
import EntryList from "./components/entry-list.component";
import EditEntry from "./components/edit-entry.component";
import CreateEntry from "./components/create-entry.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Routes>
      <Route path="/" exact element={<EntryList />} />
      <Route path="/edit/:id" element={<EditEntry />} />
      <Route path="/create" element={<CreateEntry />} />
      <Route path="/user" element={<CreateUser />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
