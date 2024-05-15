import "./App.css";

import { useState, createContext, useContext } from "react";
import { allStudents } from "./models/students";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

//create our variable to represent context

export const StudentContext = createContext();

function App() {
  const [students, setStudents] = useState(allStudents);

  const [currentStudent, setCurrentStudent] = useState({});

  return (
    <div className="App">
      <StudentContext.Provider
        value={{ students, setStudents, currentStudent, setCurrentStudent }}
      >
        <div className="mainContainer">
          <div className="dash">
            <Dashboard />
          </div>
          <div className="profile">
            {" "}
            <Profile />
          </div>
        </div>
      </StudentContext.Provider>
    </div>
  );
}

export default App;
