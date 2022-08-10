import './App.css';
import travelData from './components/travelData';
import NavBar from './components/navBar';
import MainContent from './components/main';

function App() {
  const travels = travelData.map(travel =>{
    return <MainContent
    key={travel.id}
    {...travel}
    />
  })
  return (
    <div>
      <NavBar />
      {travels}
    </div>
  );
}

export default App;
