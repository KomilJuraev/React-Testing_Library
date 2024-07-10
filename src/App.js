import './App.css';
// import { Application } from './components/application/Application';
// import { Skills } from './components/skills/Skills';
// import { Counter } from './components/counter/Counter';
// import { AppProviders } from './providers/App-Providers';
// import { MuiMode } from './components/mui/MuiMode';
import { CounterTwo } from './components/counter-two/CounterTwo';

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={['HTML', 'CSS']} /> */}
      {/* <Counter /> */}
      {/* <AppProviders> */}
        {/* <div className='App'> */}
          {/* <MuiMode /> */}
        {/* </div> */}
      {/* </AppProviders> */}
      <CounterTwo />
    </div>
  );
}

export default App;