import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100vh;
`;

function App() {
  return <Container />;
}

export default App;
