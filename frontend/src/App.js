
import styles from "./App.module.scss";

import { UsersProvider } from "./context/users/UsersContext";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scene from "./Layout/Scene";
import Main from "./Layout/Main";

const MainScene = () => {
  return (
    <>
      <Navbar />
      <Scene />
    </>
  )


}
export default function App() {
  return (
    <div className={styles.app}>

      <UsersProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/scene" element={<MainScene />} />
          </Routes>
        </Router>
      </UsersProvider>
    </div>
  );
}