import styled from 'styled-components';

export const SearchInput = styled.input`
  background-color: transparent;
  outline: none;
  font-family: inherit;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  padding: 5px 5px;
  font-size: 14px;
  line-height: normal;
  padding: 5px 5px;
`;

export const SearchComponent = ({ onChange }) => {
  return (
    <>
      <form>
        <SearchInput
          onChange={onChange}
          name="search"
          type="text"
          placeholder={'Search...'}
        />
      </form>
    </>
  );
};
