import styled from "styled-components";

export const Background = styled.div`
  background: rgb(7, 101, 0);
  background: linear-gradient(
    353deg,
    rgba(7, 101, 0, 1) 0%,
    rgba(0, 187, 12, 1) 44%,
    rgba(0, 255, 12, 1) 100%
  );
  background-image: url("https://images.unsplash.com/photo-1522947961977-67fe74257c16");
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-bottom: 100px;
`;

export const Container = styled.main`
  background: rgba(62, 62, 62, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.4px);
  -webkit-backdrop-filter: blur(10.4px);
  border: 1px solid rgba(62, 62, 62, 0.09);

  width: 90%;
  max-width: 400px;
  margin: 5% 0;
  padding: 15px;
  border-radius: 16px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  background-color: white;
  color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 30px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-size: 1.75rem;
`;

export const Options = styled.section``;

export const FifaRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0 50px 0;
`;

interface FifaButtonProps {
  isNotSelected: boolean;
}

export const FifaButton = styled.button`
  padding: 10px;
  background-color: ${(props: FifaButtonProps) =>
    props.isNotSelected ? "#444" : "#fff"};
  color: ${(props: FifaButtonProps) => (props.isNotSelected ? "#fff" : "#444")};
  border: none;
  border-radius: 16px;
`;

export const DrawCard = styled.button`
  background: rgba(62, 62, 62, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.4px);
  -webkit-backdrop-filter: blur(10.4px);
  border: 1px solid rgba(62, 62, 62, 0.09);

  width: 90%;
  max-width: 400px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DrawLabel = styled.span`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-left: 10px;
`;

export const NationalTeamsWrapper = styled.div``;

export const NTLabel = styled.span``;

export const SelectInput = styled.input``;
