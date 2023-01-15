import { Input, InputWrapper, Search, SearchWrapper } from "./styled";

export const SearchInput = (props: { nav: boolean }) => {
  return (
    <InputWrapper nav={props.nav}>
      <Input type="text" placeholder="Search" />
      <SearchWrapper nav={props.nav}>
        <Search />
      </SearchWrapper>
    </InputWrapper>
  );
};
