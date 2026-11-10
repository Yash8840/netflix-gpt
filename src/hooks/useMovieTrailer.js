import { useEffect } from "react";
import { addTrailerVideo } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  // const [key, setKey] = useState(null);
  const getBackgroundVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const result = await data.json();

    console.log(result);

    const filterData = result.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
    console.log(filterData);
    const trailer =
      filterData.length > 0 ? filterData[0] : result.results[0];
    console.log(trailer);
    // setKey(key);
    //instead of state management, lets use redux store for state management

    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    if(movieId) {
      getBackgroundVideo();
    }
  }, [movieId]);
}
export default useMovieTrailer;