import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12), 0px 0px 4px rgba(0, 0, 0, 0.24);
  background-color: white;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 800px) {
    height: 50px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
