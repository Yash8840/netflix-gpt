import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const fetchUpcomingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);

    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addUpcomingMovies(jsonData.results));
  }


  useEffect(()=>{
    fetchUpcomingMovies();
  },[])
}
export default useUpcoming;