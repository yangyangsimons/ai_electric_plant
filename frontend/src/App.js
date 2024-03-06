
import styles from "./App.module.scss";

import { UsersProvider } from "./context/users/UsersContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Layout/Main";

export default function App() {
  return (
    <div className={styles.app}>
      <UsersProvider>
        <Router>
          <Main>
            <Routes>
            </Routes>
          </Main>
        </Router>
      </UsersProvider>
    </div>
  );
}