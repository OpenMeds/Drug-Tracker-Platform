import logo from './logo.svg';
import TableauReact from './TableauReact';
import Dashboard from './dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TableauReact />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
