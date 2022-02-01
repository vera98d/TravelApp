import { WrapContainer } from "./styles";
import { ListOfHistoryEntries } from "../../components/ListOfHistoryEntries";
import { Chat } from "../../components/Chat/Chat";
import { myIdMock } from "../../components/Chat/mocks";

const ProvincePage = () => {
  return (
    <WrapContainer>
      <ListOfHistoryEntries /> <Chat myId={myIdMock} />
    </WrapContainer>
  );
};

export default ProvincePage;
