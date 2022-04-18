import { FC } from 'react';
import { SearchComponent } from '../search/search.styles';
import { HeaderContainer, OptionLink, OptionsContainer } from './header.styles';

interface HeaderProps {
  onChange?: (value: any) => void;
  showSearch?: boolean;
}

const Header: FC<HeaderProps> = ({ onChange, showSearch = false }) => {
  return (
    <HeaderContainer>
      <OptionsContainer>
        <OptionLink to="/">
          <h1>Sav State</h1>
        </OptionLink>
      </OptionsContainer>
      {showSearch && (
        <OptionsContainer>
          <SearchComponent onChange={onChange} />
        </OptionsContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
