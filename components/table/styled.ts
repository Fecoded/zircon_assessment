import styled from "styled-components";
import { Input } from "../input/styled";

const backgroundColor = "#F8F9FB";
const borderColor = "#F0F4F8";

export const Table = styled.table`
  background: ${backgroundColor};
  border-radius: 5px;
  margin-top: 1.5rem;
  border-collapse: collapse;
  width: 100%;
`;

export const TBody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Td = styled.td`
  border: 1px solid ${borderColor};
  padding: 16px 24px;
  font-weight: 600;
  font-size: 14px;
`;

export const Box = styled.div`
  overflow-x: auto;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  } ;
`;

export const DottedBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted #ddd;
  width: 198px;
  height: 160px;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })``;
