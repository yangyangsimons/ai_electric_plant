import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { UsersProvider } from "./context/users/UsersContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Layout/Main";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MemberArea from "./pages/MemberArea";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <Router>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/members-area" element={<MemberArea />} />              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
        </Router>
      </UsersProvider>
    </div>
  );
}

export default App;