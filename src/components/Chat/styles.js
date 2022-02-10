import styled from "styled-components";
import { scrollbarStyles } from "../../styles";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryUi};
  height: 600px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Header = styled.h3`
  text-align: center;
  background-color: ${(props) => props.theme.colors.primaryUi};
  border-radius: 12px 12px 0 0;
  padding: 15px;
  margin: 0;
  font-size: 30px;
  font-weight: 1000;
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
`;

export const MessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin: 10px;
  padding: 0%;
  overflow: auto;
  ${scrollbarStyles}
`;

export const Footer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  border-radius: 5px;
  border-style: none;
  margin-right: 10px;
  padding: 10px;
  outline: none;
`;

export const Button = styled.button`
  align-self: center;
  border-radius: 50%;
  border: none;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.theme.colors.primaryUi};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) =>
    props.isOwn ? "10px 0 10px 10px" : "0 10px 10px 10px"};
  padding: 15px;
  margin: 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  align-self: ${(props) => (props.isOwn ? "flex-end" : "flex-start")};
`;
