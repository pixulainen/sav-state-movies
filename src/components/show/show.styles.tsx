import { Cluster } from '../layout/Cluster';
import styled from 'styled-components';
import { ShowCast } from '../../types/entity';
import Image from '../common/Image';

export const ShowContainer = styled.div`
  width: 100%;
  padding: 1rem 1.5rem 1rem 1.5rem;
  box-sizing: border-box;

  @media only screen and (min-width: 801px) {
    flex: 1;
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
`;

const StyledContainer = styled.div`
  & > :nth-child(1) {
    max-width: 60%;
    min-width: 15rem;
    margin: 0 auto 2rem auto;
    @media only screen and (min-width: 801px) {
      flex: 1 0 30%;
      min-width: 18rem;
      max-width: 30%;
      margin: 0 2rem 0 0;
    }
  }
  & > :nth-child(2) {
    @media only screen and (min-width: 801px) {
      max-width: 70%;
      flex: 1 1 70%;
    }
  }
  @media only screen and (min-width: 801px) {
    display: flex;
    justify-content: center;
    max-width: 90rem;
    margin: 0 auto 4rem auto;
    padding: 0 4rem 0 4rem;
  }
`;

const InfoContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const MiscInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  justify-content: flex-start;
  align-items: baseline;
  @media only screen and (min-width: 801px) {
    flex-direction: row;
    margin: 0 auto 10px auto;
  }
`;

const MovieOverview = styled.div`
  margin: 0.5rem 0 0.5rem 0;
`;

const DetailedInfo = ({ title, year, summary, status, showCast, genres }) => {
  return (
    <div>
      <h3>{`${title} Realesed: (${year})`}</h3>
      <MovieOverview>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </MovieOverview>
      <MiscInfo>
        <h4>Cast:</h4>
        {showCast?.length ? (
          showCast.map(({ person, character }: ShowCast) => {
            return (
              <>
                <p>{`${person.name} (${character.name})`}</p>
              </>
            );
          })
        ) : (
          <p>No showcast found</p>
        )}
      </MiscInfo>
      <MiscInfo>
        <h4>Status:</h4>
        <p>{status}</p>
      </MiscInfo>
      <MiscInfo>
        <h4>Genres:</h4>
        {genres?.length ? (
          genres.map((genre) => {
            return <p>{`${genre} `}</p>;
          })
        ) : (
          <p>No genres found</p>
        )}
      </MiscInfo>
    </div>
  );
};

const ShowInfo = ({ show, showCast }) => {
  return (
    <>
      <InfoContainer>
        <div>
          <Image src={show?.image?.medium} alt={`${show?.name} poster`} />
        </div>
        <DetailedInfo
          status={show?.status}
          summary={show?.summary}
          title={show?.name}
          year={show?.premiered}
          genres={show?.genres}
          showCast={showCast}
        />
      </InfoContainer>
    </>
  );
};

export const ShowSeasonsInfo = ({ seasons }) => {
  return (
    <>
      {Object.keys(seasons).map((season, i) => {
        return (
          <div>
            <h3>Season: {season}</h3>
            <Cluster>
              {seasons[season].map((episode) => (
                <>
                  <h5>Episode: {episode?.name}</h5>
                </>
              ))}
            </Cluster>
          </div>
        );
      })}
    </>
  );
};

export default ShowInfo;
