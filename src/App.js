
import { useState } from 'react';
import './App.css';
import { About,Skills,Projects,PersonalDetails} from './component';
function App() {
  const [state,setState] = useState(0)
  const Header = ()=>{
      return (
        <div className='button Header'>
          <button onClick={(evt)=>{setState(0);evt.preventDefault();}}>About</button>
          <button onClick={(evt)=>{setState(1);evt.preventDefault();}}>Skills</button>
          <button onClick={(evt)=>{setState(2);evt.preventDefault();}}>Projects</button>
        </div>
      )
  }
  if(state===0){
    return (
      <div className='rootDiv'>
      <div className="contact-div">
      <PersonalDetails/>
      </div>
      <div  className="page-div">
      <Header/>
      <About/>
    </div>
      </div>
    )
  }
  else if(state === 1){
    return (
      <div className='rootDiv'>
      <div className="contact-div">
      <PersonalDetails/>
      </div> 
      <div className="page-div">
      <Header/>
      <Skills/>
      </div>
      
      </div>
    )
  }
  else{
    return (
      <div className='rootDiv'>
        <div className="contact-div">
      <PersonalDetails/>
        </div>
      <div className="page-div">
      <Header/><Projects/>
      </div>
      
      </div>
    )
  }

}

export default App;
