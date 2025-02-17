
import styles from "./App.module.scss";

import { UsersProvider } from "./context/users/UsersContext";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scene from "./Layout/Scene";
import Main from "./Layout/Main";
import Prediction from "./Layout/Prediction";
import { Provider } from 'react-redux';
import store  from './stores/store';

export default function App() {
  return (
    <Provider store={store}>
    <div className={styles.app}>
      <UsersProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/scene" element={<Scene />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
        </Router>
      </UsersProvider>
    </div>
    </Provider>
  );
}