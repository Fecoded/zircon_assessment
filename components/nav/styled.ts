import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffffff;
  padding-bottom: 20px;
  padding-top: 20px;
  width: 100%;
`;

export const NavBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  } ;
`;

export const NavFlex = styled.div`
  display: flex;
  align-items: center;
`;
