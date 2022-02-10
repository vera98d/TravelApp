import styled from "styled-components";
import { Chat } from "../../components/Chat/Chat";
import { ListOfHistoryEntries } from "../../components/ListOfHistoryEntries";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 1500px;
  width: 100%;
  gap: 60px;
  @media screen and (max-width: 1150px) {
    gap: 30px;
  }
  @media screen and (max-width: 640px) {
    flex-direction column;
  }
`;

export const StyledListOfHistoryEntries = styled(ListOfHistoryEntries)`
  width: 35%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledChat = styled(Chat)`
  width: 65%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
