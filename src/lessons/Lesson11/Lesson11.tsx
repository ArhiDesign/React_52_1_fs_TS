import { useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import {
  Lesson11Wrapper,
  ResultBlock,
  ButtonWrapper,
  ErrorBlock,
} from "./styles";

function Lesson11() {
  const [facts, setFacts] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const CAT_FACT_URL = "https://catfact.ninja/fact";

  const fetchCatFact = async () => {
    setError("");
    setIsLoading(true);

    try {
      const result = await axios.get(CAT_FACT_URL);
      setFacts((prevFacts) => [...prevFacts, result.data.fact]);
    } catch (error: any) {
      setError("Error 404 Not Found");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAllData = () => {
    setFacts([]);
  };

  return (
    <Lesson11Wrapper>
      <ButtonWrapper>
        <Button
          name="GET MORE INFO"
          onClick={fetchCatFact}
          disabled={isLoading}
        />
      </ButtonWrapper>
      {error && <ErrorBlock>{error}</ErrorBlock>}
      {isLoading && <Spinner />}

      {facts.length > 0 && (
        <ResultBlock>
          {facts.map((fact, index) => (
            <p key={index}>{fact}</p>
          ))}
        </ResultBlock>
      )}

      {facts.length > 0 && (
        <ButtonWrapper>
          <Button name="DELETE ALL DATA" onClick={deleteAllData} />
        </ButtonWrapper>
      )}
    </Lesson11Wrapper>
  );
}

export default Lesson11;
