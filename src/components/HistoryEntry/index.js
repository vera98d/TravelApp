import React from "react";
import { StyledHistoryEntry, StyledStoryText } from "./style";

export const HistoryEntry = (props) => {
  return (
    <StyledHistoryEntry>
      <h1 className="storyContentTitle">
        {props.title} - {props.city}
      </h1>
      <div className="storyContent">
        <img
          src={props.image}
          className="currentStoryImage"
          alt={props.image}
        />
        <StyledStoryText>{props.description}</StyledStoryText>
      </div>
    </StyledHistoryEntry>
  );
};
