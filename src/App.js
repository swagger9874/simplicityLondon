import { Routes } from './Routes';
import { Segment } from 'semantic-ui-react'
import { Header } from './components/shared/Header';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div style={{display:"flex"}}>
    <div className="container">
      {
        localStorage.getItem("authToken") &&
        <Header/>
      }
      <Segment style={{alignSelf:"center"}}>
        <Routes/>
      </Segment>
        
    </div>

    </div>
  );
}

export default App;
