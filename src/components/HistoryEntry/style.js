import styled from "styled-components";

export const StyledHistoryEntry = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  position: relative;
  flex-wrap: wrap;

  .storyContentTitle {
    width: 100%;
    height: 80px;
    text-align: center;
  }

  .currentStoryImage {
    width: 15em;
    height: 25em;
    border-radius: 30px;
    margin-right: 3%;
    object-fit: cover;
  }

  .storyContent {
    display: flex;
    height: 25em;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    .currentStoryImage {
      width: 18em;
    }
  }
`;

export const StyledStoryText = styled.div`
  width: 60%;
  margin: 0 1em;
  overflow: auto;
  font-size: 12px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primaryUi};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.white};
    border-radius: 5px;
  }

  > * {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
