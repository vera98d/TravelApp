import { useEffect, useState } from "react";
import { entriesMock } from "./mock";
import { Button, Container, Entry, EntriesList, Header } from "./styles";

const getEntries = async () => entriesMock;

export const ListOfHistoryEntries = () => {
  const [entriesState, setEntriesState] = useState([]);

  useEffect(() => {
    getEntries().then((data) => {
      setEntriesState(data);
    });
  }, []);

  return (
    <Container>
      <Header>History of entries</Header>
      <EntriesList>
        {entriesState.map((entry) => {
          return (
            <Entry key={entry.id}>
              {entry.title} - {entry.city}
            </Entry>
          );
        })}
      </EntriesList>
      <Button type="button">Create new story</Button>
    </Container>
  );
};
