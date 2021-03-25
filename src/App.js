
import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';
import Pages from './pages';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Pages/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
