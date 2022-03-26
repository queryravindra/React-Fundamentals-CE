import './App.css';
// import ClickCounter from './components/33.0.ClickCounter';
// import HoverCounter from './components/33.1.HoverCounter';
// import ClickCounter from './components/34.1.ClickCounter'
// import HoverCounter from './components/34.2.HoverCounter'
import ClickCounter from './components/35.1.ClickCounter';
import HoverCounter from './components/35.2.HoverCounter';

function App() {
  return (
    <div className="App">
      {/* 33.Higher Order components p-1 */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* 34.Higher Order components p-2 */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* 35.Higher Order components p-3 */}
      <ClickCounter name='Ravindra' />
      <HoverCounter />
    </div>
  );
}

export default App;
