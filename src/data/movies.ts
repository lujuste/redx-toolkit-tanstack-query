import { AxiosResponse } from "axios";
import api from "../services/api";

type Props = {
  genres: {
    id: number;
    name: string;
  }[];
};

const getMovies = async () => {
  const responseMoviesByCategory = await api.get(
    "3/genre/movie/list?language=en"
  );
  return responseMoviesByCategory.data as Props;
};

export { getMovies };
