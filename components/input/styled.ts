import styled from "styled-components";
import { SearchIcon } from "../svg";

const textColor = "#0B2F59";

export const InputWrapper = styled("div")<{ nav: boolean }>`
  position: relative;
  display: flex;
  margin-top: ${(props) => (props.nav ? "0px" : "1.5rem")};
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.nav ? "17rem" : "100%")};
`;

export const Input = styled.input`
  font-family: Quicksand;
  width: 60%;
  padding: 0.7rem;
  color: ${textColor};
  background: #ffffff;
  border: 1px solid #ccdaea;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Search = styled(SearchIcon)``;

export const SearchWrapper = styled("div")<{ nav: boolean }>`
  position: absolute;
  right: ${(props) => (props.nav ? "4.5rem" : "15rem")};

  @media (max-width: 768px) {
    right: 1rem;
  }
`;
