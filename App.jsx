import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./menu/Navbar";
import ProjectManage from "./admin/ProjectManage";
import UploadProjectForm from "./admin/UploadProjectForm";
import AdminForm from "./admin/AdminForm";
import ClientForm from "./admin/ClientForm";
import ClientList from "./pages/ClientList";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleClientAdded = () => {
    setRefresh(!refresh); // Toggle refresh to fetch updated clients
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/projectmanage" element={<ProjectManage />} />
        <Route path="/uploadprojectform" element={<UploadProjectForm />} />
        <Route path="/adminform" element={<AdminForm />} />
        <Route
          path="/clientform"
          element={<ClientForm onClientAdded={handleClientAdded} />}
        />
        <Route path="/clientlist" element={<ClientList key={refresh} />} />
      </Routes>
    </Router>
  );
};

export default App;
