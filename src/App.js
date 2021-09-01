import './App.css';
import AppBar from './components/AppBar';
import NavigationComponent from './components/NavigationComponent';
import StatisticsComponent from './components/StatisticsComponent';
import UpComingTaskComponent from './components/UpComingTaskComponent';
import GraphicComponent from './components/GraphicComponent';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <NavigationComponent></NavigationComponent>
      <UpComingTaskComponent></UpComingTaskComponent>
      <StatisticsComponent></StatisticsComponent>
      <GraphicComponent></GraphicComponent>
    </div>
  );
}

export default App;
