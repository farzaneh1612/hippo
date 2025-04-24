import './App.css';
import ResponsiveAppBar from './component/appBar/ResponsiveAppBar.tsx';
import Home from './pages/Home/Home.tsx'

function App() {
  return (
    <div style={{webkitScrollbar:{width:0}}}>
      <ResponsiveAppBar/>
   <Home/>
    </div>
  );
}

export default App;
