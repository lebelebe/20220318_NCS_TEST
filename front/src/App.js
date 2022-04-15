import Preinterview from './component/Preinterview';
import { FullPage, Slide } from 'react-full-page';
import Introduce from './component/Introduce';
import './App.css';
import useWindowSize from'./component/useWindowSize';
import Fullpage2 from './component/Fullpage2';

function App() {

  return (
    <div className="Wrap">
      <FullPage duration={130}>
        <Slide>
          <Introduce type='interviewlist'></Introduce>
        </Slide>
        <Slide>
          <Fullpage2></Fullpage2>
        </Slide>
      </FullPage>
      {/* <Preinterview type='interviewlist'></Preinterview> */}
    </div>
  );
}

export default App;
