import React, { useState } from "react";
import CreateForm from "./form";
import People from "./formData";

function App() {
  const [people, setPeople] = useState([
    {
      id: Date.now(),
      name: "Alex",
      email: "alex@alex.com",
      role: "student",
    },
  ]);

  const addNewData = (data) => {
    const newData = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      role: data.role,
    };
    setPeople([...people, newData]);
  };

  return (
    <div>
      <CreateForm addNewData={addNewData} />
      <People people={people} />
    </div>
  );
}

export default App;
