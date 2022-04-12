import Preinterview from './component/Preinterview';
import Classcom from './component/Classcomponent';
import { FullPage, Slide } from 'react-full-page';
import Fullpage1 from './component/Fullpage1';
import Introduce from './component/Introduce';

function App() {
  return (
    <div className="Wrap">
      <FullPage duration={130}>
        <Slide>
          <Introduce type='interviewlist'></Introduce>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>
      {/* <Preinterview type='interviewlist'></Preinterview> */}
    </div>
  );
}

export default App;
