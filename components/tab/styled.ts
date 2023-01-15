import Link from "next/link";
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: 35px;
  overflow-x: auto;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
    color: #0079d2;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
