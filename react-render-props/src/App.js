import './App.css';
import ClickCounter from './components/36.0.ClickCounter';
import HoverCounter from './components/36.1.HoverCounter';
import RenderPropsUser from './components/37.0.RenderPropsUser';
import Counter from './components/37.1.Counter';

function App() {
  return (
    <div className="App">
      {/* 36.Render props part-1 */}
        {/* <ClickCounter />
        <HoverCounter /> */}
      {/* 36.Render props part-2 */}
        {/* <RenderPropsUser name='Ravindra' /> */}
        {/* <RenderPropsUser name={() => 'Ravindra'} /> */}
        {/* <RenderPropsUser name={(isLoggedIn) => isLoggedIn ? 'Ravindra' : 'Guest'} /> */}
        {/* <RenderPropsUser render={(isLoggedIn) => isLoggedIn ? 'Ravindra' : 'Guest'} /> */}
        {/* <Counter 
          render={(count, incrementCount) => (
              <ClickCounter count={count} incrementCount={incrementCount} />
          )} 
        /> */}

        {/* what is also important here is that the prop is need not be render(render attribute in counter) here is it shoul be any name*/}
        {/* but it is kind of convention */}

        {/* <Counter 
          render={(count, incrementCount) => (
              <HoverCounter count={count} incrementCount={incrementCount} />
          )} 
        /> */}

        {/* Infact there is a variation of the render props pattern which doesnt make use of props instead the children prop is used */}
        <Counter>
          {(count, incrementCount) => (
              <ClickCounter count={count} incrementCount={incrementCount} />
          )} 
        </Counter>

        <Counter>
          {(count, incrementCount) => (
              <HoverCounter count={count} incrementCount={incrementCount} />
          )} 
        </Counter>
    </div>
  );
}

export default App;
