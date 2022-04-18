import { FullPage, Slide } from 'react-full-page';
import Introduce from './component/Introduce';
import './App.css';
import Fullpage2 from './component/Fullpage2';
import Modalform from './component/Form/Modalform';

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
      <Modalform></Modalform>
    </div>
  );
}

export default App;
