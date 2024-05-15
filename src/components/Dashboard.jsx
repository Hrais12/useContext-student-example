import React from "react";
import { useContext } from "react";
import { StudentContext } from "../App";

function Dashboard() {
  const student = useContext(StudentContext);
  const { students, setCurrentStudent } = student;

  //   const { students } = student;

  return (
    <div className="dashContainer">
      {students.map((learner) => {
        return (
          <p
            className="kid"
            onClick={() => {
              setCurrentStudent(learner);
            }}
          >
            Student Name:{learner.name}
          </p>
        );
      })}
    </div>
  );
}

export default Dashboard;
