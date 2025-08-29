import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CreateEmployee from "./Pages/CreateEmployee";
import GetEmployee from "./Pages/GetEmployee";
import EditEmployee from "./Pages/EditEmployee";
import ViewEmployee from "./Pages/ViewEmployee";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Form />} /> */}
            <Route path="/" element={<GetEmployee />} />
            <Route path="/create" element={<CreateEmployee />} />
            <Route path="/edit/:id" element={<EditEmployee />} />
            <Route path="/view/:id" element={<ViewEmployee />} />
            <Route
              path="/about"
              element={<div className="p-6">About Page</div>}
            />
            <Route
              path="/contact"
              element={<div className="p-6">Contact Page</div>}
            />
          </Routes>
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
