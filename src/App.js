import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className='App'>
      <Header>
        <h1>Header</h1>
      </Header>
      <Main>
        <h1>Main</h1>
      </Main>
    </div>
  );
}

export default App;
