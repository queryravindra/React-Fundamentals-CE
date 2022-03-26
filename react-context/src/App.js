import './App.css';
// import ComponentC from './components/39.0.ComponentC';
import { UserProvider } from './components/39.1.userContext';
import ComponentC from './components/40.1.ComponentC';

function App() {
  return (
    <div className="App">
      {/* 39.Context - p2 */}
      <UserProvider value='Ravindra'>
        <ComponentC />
      </UserProvider>
      {/* 40.Context - p3 */}
      <ComponentC />
    </div>
  );
}

export default App;

