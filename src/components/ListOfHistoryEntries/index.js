import { useEffect, useState, useContext } from "react";
import { Button, Container, Entry, EntriesList, Header } from "./styles";
import { ModalContext } from "../../contexts/ModalContextProvider";
import AddPost from "../AddPost";
import { HistoryEntry } from "../HistoryEntry";
import historyEntriesService from "../../services/HistoryEntriesService";

export const ListOfHistoryEntries = (props) => {
  const [entriesState, setEntriesState] = useState([]);

  const modalContext = useContext(ModalContext);

  useEffect(() => {
    historyEntriesService.getAll(props.province).then((data) => {
      setEntriesState(data);
    });
  }, [props.province]);

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
                {entry.title} – {entry.city}
              </Entry>
            </>
          );
        })}
      </EntriesList>
      <Button
        type="button"
        onClick={() => {
          modalContext.setDisplayedComponent(
            <AddPost province={props.province} />
          );
        }}
      >
        Create new story
      </Button>
    </Container>
  );
};
