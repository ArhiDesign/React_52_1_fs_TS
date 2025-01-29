import styled from '@emotion/styled';

export const Homework10Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  //width: 100%;
`;

export const ResultBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ImageBlock = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


export const ErrorBlock = styled.div`
  width: 600px;
  padding: 20px;
  background-color: #eb9378;
  border: 2px solid #e61212;
  border-radius: 6px;
  color: #e61212;
  font-size: 28px;
  font-weight: bold;
`;