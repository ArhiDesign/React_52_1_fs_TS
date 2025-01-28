import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Homework09Wrapper, ResultContainer } from "./styles";

function Homework09() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const buttonClick = () => {
    console.log("Name:", name, "Age:", age);
  };

  return (
    <Homework09Wrapper>
      <Input
        name="name"
        label="Name"
        id="name_id"
        value={name}
        onChange={nameChange}
        placeholder="Enter your name"
      />
      <Input
        name="age"
        label="Age"
        id="age_id"
        value={age}
        onChange={ageChange}
        placeholder="Enter your age"
      />
      <Button name="Submit" onClick={buttonClick} />

      <ResultContainer>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </ResultContainer>
    </Homework09Wrapper>
  );
}

export default Homework09;
