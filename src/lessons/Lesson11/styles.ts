import styled from "@emotion/styled";

export const Lesson11Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
`;

export const ButtonWrapper = styled.div`
  width: 300px;
`;

export const ResultBlock = styled.div`
  width: 600px;
  max-height: 700px;
  overflow-y: auto;
  padding: 20px;
  background-color: #28ebe4;
  border-radius: 6px;
  font-size: 18px;
  font-weight: normal;
  margin-top: 20px;

  p {
    margin: 20px 0;
  }
`;

export const ErrorBlock = styled.div`
  width: 600px;
  padding: 20px;
  background-color: #EBBBAB;
  border: 2px solid #e61212;
  border-radius: 6px;
  color: #e61212;
  font-size: 18px;
  font-weight: bold;
`;
