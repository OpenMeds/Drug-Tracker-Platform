import logo from '../logo.svg';
import TableauReact from '../dashboard/components/TableauReact';
import Dashboard from '../dashboard/Dashboard';
import '../App.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Dashboard idx = {0}/>
      </header>
    </div>
  );
}

export default HomePage;