import styled from "styled-components";

export const Container = styled.div`
  background: rgba(62, 62, 62, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.4px);
  -webkit-backdrop-filter: blur(10.4px);
  border: 1px solid rgba(62, 62, 62, 0.09);

  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  margin-top: 20px;
`;

export const InfoRow = styled.div`
  display: flex;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;

  & > h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  & > p {
    margin: 0;
  }
`;

export const OverallRow = styled.div`
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const Overall = styled.span``;
