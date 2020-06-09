import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  .name {
    margin-right: 10px;
  }
  .email {
    margin-right: 5px;
    margin-top: 5px;
  }
  .role {
    margin-top: 10px;
  }
  .button {
    margin-top: 10px;
  }
`;

function CreateForm(props) {
  const [people, setPeople] = useState([
    {
      id: Date.now(),
      name: "",
      email: "",
      role: "",
    },
  ]);

  const changeHandles = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addNewData(people);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <Card>
          <label className="name" htmlFor="name">
            Name
            <input id="name" name="name" onChange={changeHandles} />
          </label>

          <label className="email" htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandles}
            />
          </label>

          <label htmlFor="role">
            Role
            <input
              id="role"
              className="role"
              name="role"
              onChange={changeHandles}
            />
          </label>
          <button className="button">Add Person</button>
        </Card>
      </form>
    </div>
  );
}

export default CreateForm;
