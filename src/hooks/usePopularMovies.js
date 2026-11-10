import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);

    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addPopularMovies(jsonData.results));
  }


  useEffect(()=>{
    fetchPopularMovies();
  },[])
}
export default usePopularMovies;