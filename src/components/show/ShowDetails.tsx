import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestClient from '../../api/RestClient';
import { Show, ShowCast } from '../../types/entity';
import Header from '../header/Header';
import ShowInfo, { ShowContainer, ShowSeasonsInfo } from './show.styles';

const restClient = new RestClient();

const ShowDetails = () => {
  const { showId } = useParams();

  const [show, setShow] = useState<Show>(null);
  const [showCast, setShowCast] = useState<ShowCast[]>(null);
  const [seasonMap, setSeasonMap] = useState({});

  useEffect(() => {
    const getShowDetails = async () => {
      const { data } = await restClient.get(`/shows/${showId}`);
      setShow(data);
    };
    const getShowCast = async () => {
      const { data } = await restClient.get(`/shows/${showId}/cast`);
      setShowCast(data);
    };
    async function createSeasonsMap(showId) {
      const newSeasonsMap = {};

      const { data: seasons } = await restClient.get(
        `/shows/${showId}/seasons`,
      );

      const getEpisodesForSeason = async (seasonId) => {
        return await restClient.get(`/seasons/${seasonId}/episodes`);
      };
      for (const season of seasons) {
        const { data: seasonEpisodes } = await getEpisodesForSeason(season.id);
        newSeasonsMap[season.number] = seasonEpisodes;
      }
      setSeasonMap(newSeasonsMap);
    }
    Promise.all([getShowDetails(), getShowCast(), createSeasonsMap(showId)]);
  }, []);

  return (
    <>
      <Header />
      <ShowContainer>
        <ShowInfo showCast={showCast} show={show} />
        <ShowSeasonsInfo seasons={seasonMap} />
      </ShowContainer>
    </>
  );
};

export default ShowDetails;
