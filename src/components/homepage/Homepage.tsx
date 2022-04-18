import { useEffect, useState } from 'react';
import RestClient from '../../api/RestClient';
import Header from '../header/Header';
import ShowList from './homepage.styles';
import { HomePageContainer } from './homepage.styles';
import { debounce } from 'lodash';
import { useSearchParams } from 'react-router-dom';

const restClient = new RestClient();

const HomePage = () => {
  const today = new Date().toISOString().substring(0, 10);
  const [state, setState] = useState({
    shows: [],
    loading: true,
    error: false,
  });
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchQuery = searchParams.get('search');

  const searchShows = async () => {
    setState({ ...state, loading: true });
    const { data } = await restClient.get(`/search/shows?q=${searchQuery}`);
    const shows = data
      .flatMap((show) => show.show)
      .filter((show) => show?.image?.medium);
    setState({ ...state, shows, loading: false });
  };

  const getTodayShows = async () => {
    setState({ ...state, loading: true });
    const { data } = await restClient.get(`/schedule?country=GB&date=${today}`);

    const shows = data
      .flatMap((show) => show.show)
      .filter((show) => show?.image?.medium);
    setState({ ...state, shows, loading: false });
  };

  useEffect(() => {
    const request = async () => {
      if (!searchQuery) {
        getTodayShows();
      } else {
        searchShows();
      }
    };

    request();
  }, [searchQuery]);

  const handleChange = debounce(async (e) => {
    const searchQuery = e.target.value;
    setSearchParams({ search: searchQuery });
  }, 500);

  const shows = state.shows;

  return (
    <>
      <Header showSearch onChange={handleChange} />
      <HomePageContainer>
        {state.loading && <h1>Loading...</h1>}
        <ShowList shows={shows} />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
