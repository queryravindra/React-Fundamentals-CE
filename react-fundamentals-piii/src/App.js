import './App.css';
import FragmentDemo from './components/25.0.FragmentDemo';
import Table from './components/25.1.0.Table';
import ParentComp from './components/26.ParentComp';
import RefsDemo from './components/28.RefsDemo';
import FocusInput from './components/29.1.FocusInput';
import ForwardingRefsParentInput from './components/30.1.ForwardingRefsParentInput';
import PortalDemo from './components/31.PortalDemo';
import Hero from './components/32.0.Hero';
import ErrorBoundary from './components/32.1.ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* 25.Fragments */}
      <FragmentDemo />
      <Table/>
      {/* 26.Pure Components */}
      {/* <ParentComp /> */}
      {/* 27.Memo */}
      {/* 28.Refs */}
      <RefsDemo />
      {/* 29.Refs with Class Components */}
      <FocusInput />
      {/* 30.Forwarding Refs */}
      <ForwardingRefsParentInput />
      {/* 31.Portals */}
      <PortalDemo />
      {/* 32.Error Boundary */}
        {/* this behaviour leads to hiding of all elements even there is no eror in other elements so better bound every element */}
        {/* <ErrorBoundary>
          <Hero heroName='Batman' />
          <Hero heroName='Superman' />
          <Hero heroName='Joker' />
        </ErrorBoundary> */}

        <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary>
    </div>
  );
}

export default App;
