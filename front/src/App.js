import Preinterview from './component/Preinterview';
import Classcom from './component/Classcomponent';
import { FullPage, Slide } from 'react-full-page';
import Fullpage1 from './component/Fullpage1'

function App() {
  return (
    <div className="Wrap">
      <FullPage>
        <Slide>
          <Fullpage1></Fullpage1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>
      {/* <Preinterview type='aws'></Preinterview> */}
    </div>
  );
}

export default App;
