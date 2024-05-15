import React from "react";
import { useContext } from "react";

import { StudentContext } from "../App";

function Profile() {
  const student = useContext(StudentContext);
  const { currentStudent } = student;
  return <div className="proContainer">{currentStudent.name}'s Profile</div>;
}

export default Profile;
