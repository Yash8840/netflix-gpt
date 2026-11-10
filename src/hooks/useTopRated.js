import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();

  const fetchTopRatedMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);

    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addTopRatedMovies(jsonData.results));
  }


  useEffect(()=>{
    fetchTopRatedMovies();
  },[])
}
export default useTopRated;