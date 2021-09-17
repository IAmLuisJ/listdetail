import './App.css';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <ItemList />
        <ItemDetail />
      </div>
    </div>
  );
}

export default App;
