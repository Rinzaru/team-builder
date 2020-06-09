import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  margin: 0 auto;
  wrap: flex-wrap;
  margin-top: 10px;
`;

const People = (props) => {
  return (
    <div>
      {props.people.map((data) => (
        <div key={data.id}>
          <Card>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>{data.role}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default People;
