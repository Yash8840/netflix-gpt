import { useDispatch, useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GPTSearchPage from './GPTSearchPage';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  const toggleGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();


  return (
    <div className='relative h-screen w-screen bg-[#141414] overflow-x-hidden'>
      <Header/>
      {/* show GPT search when clicked on the button in the header  */}
      {toggleGPTSearch ? <GPTSearchPage/> : <><MainContainer/>
      <SecondaryContainer/></>}
      
    </div>
  )
}

export default Browse