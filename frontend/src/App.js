
import styles from "./App.module.scss";

import { UsersProvider } from "./context/users/UsersContext";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scene from "./Layout/Scene";
import Main from "./Layout/Main";
import Prediction from "./Layout/Prediction/Prediction";

export default function App() {
  return (
    <div className={styles.app}>
      <UsersProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/scene" element={<Scene />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
        </Router>
      </UsersProvider>
    </div>
  );
}