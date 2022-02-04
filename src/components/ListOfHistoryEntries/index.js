import { useEffect, useState, useContext } from "react";
import { entriesMock } from "./mock";
import { Button, Container, Entry, EntriesList, Header } from "./styles";
import { ModalContext } from "../../contexts/ModalContextProvider";
import AddPost from "../AddPost";
import HistoryEntry from "../HistoryEntry";

const getEntries = async () => entriesMock;

export const ListOfHistoryEntries = (props) => {
  const [entriesState, setEntriesState] = useState([]);

  const modalContext = useContext(ModalContext);

  useEffect(() => {
    getEntries().then((data) => {
      setEntriesState(data);
    });
  }, []);

  return (
    <Container className={props.className}>
      <Header>History of entries</Header>
      <EntriesList>
        {entriesState.map((entry) => {
          return (
            <>
              <Entry
                key={entry.id}
                onClick={() => {
                  modalContext.setDisplayedComponent(
                    <HistoryEntry
                      title={entry.title}
                      city={entry.city}
                      description={entry.description}
                      image={entry.image}
                    />
                  );
                }}
              >
                {entry.title} - {entry.city}
              </Entry>
            </>
          );
        })}
      </EntriesList>
      <Button
        type="button"
        onClick={() => {
          modalContext.setDisplayedComponent(<AddPost />);
        }}
      >
        Create new story
      </Button>
    </Container>
  );
};
