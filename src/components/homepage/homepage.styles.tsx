import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Show } from '../../types/entity';
import Image from '../common/Image';
export const HomePageContainer = styled.div`
  width: 100%;
  padding: 2rem 1.5rem 2rem 1.5rem;
  box-sizing: border-box;
  @media only screen and (min-width: 801px) {
    flex: 1;
    padding: 3rem 2rem 3rem 2rem;
  }
`;

const StyledShowList = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 7.5rem));
  gap: 2rem 1rem;
  @media only screen and (min-width: 801px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 15rem));
    gap: 5rem 2.5rem;
  }
`;

const StyledShowLink = styled(Link)`
  border-radius: 6px;
  font-size: 1.1rem;
  text-decoration: none;
  text-align: center;
  color: black;
  transition: all 0.3s ease;
  font-size: 85%;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  &:hover {
    transform: scale(1.05) translateZ(0);
    background-color: rgb(243, 243, 243);
    box-shadow: 0 2px 8px 3px rgb(64 60 67 / 16%);
  }
  @media only screen and (min-width: 801px) {
    font-size: inherit;
  }
`;

const ImageWrapper = styled.div`
  height: 10rem;
  & > img {
    width: 100%;
  }
  @media only screen and (min-width: 801px) {
    height: 21rem;
  }
`;
const ShowInfo = styled.div`
  padding: 1rem;
  & > :nth-child(1) {
    font-weight: bolder;
  }
`;

const ShowComponent: FC<Show> = (show) => {
  return (
    <StyledShowLink
      to={`/shows/${show.id}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <ImageWrapper>
        <Image src={show?.image?.medium} alt={`${show.name} poster`} />
      </ImageWrapper>
      <ShowInfo>
        <h5>{show.name}</h5>
      </ShowInfo>
    </StyledShowLink>
  );
};

interface ShowListProps {
  shows: Show[];
}

const ShowList: FC<ShowListProps> = ({ shows }) => {
  return (
    <>
      <StyledShowList>
        {shows.map((show: Show, i: number) => (
          <ShowComponent
            key={i}
            id={show.id}
            name={show.name}
            image={show.image}
          />
        ))}
      </StyledShowList>
    </>
  );
};

export default ShowList;
