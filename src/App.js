import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import TWOVARRSYS from './TWOVARRSYS';
import THREEVARRSYS from './THREEVARRSYS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowDown, faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import "/Users/ishaanmisra/Desktop/non_linear_differential_equation_sim/src/lotkavolterra-removebg-preview.png";
import "/Users/ishaanmisra/Desktop/non_linear_differential_equation_sim/src/iodine_clock_reaction.png";




function App() {
  return (
    <div className="App">
      <h1>NON-LINEAR DIFFERENTIAL EQUATION SIMULATOR</h1>
      <br/><br/>
      <p className="desc">Non-linear differential equation simulator is a web app used to simulate <br/>2 variable and 3 variable non-linear differential equations under different initial conditions and constants.</p>
      <br/>
      <div className='disclaimer'>
        <p className="desc"><b>NOTE: After any simulation, click the refresh button below <FontAwesomeIcon  icon={faArrowDown}/></b></p>
        <Button variant='contained' onClick={() => window.location.reload(false)}>Click to reload!</Button>
      </div>
      <br/>
      <br/>
      <pre className='twovar-header'><FontAwesomeIcon className="two-icon" icon={faCodeBranch}/> <div className="text">2-VARIABLE NON-LINEAR DIFFERENTIAL EQUATION</div></pre>
      <br/><br/><br/>
      <br/>
      <div className="twovarcont">
      <div className="twovarimg"><img src="/Users/ishaanmisra/Desktop/non_linear_differential_equation_sim/src/lotkavolterra-removebg-preview.png" alt="This is a 2 variable non linear differential equation."/></div>
      <div className="twovartext">
        <p className="desc">This is a basic example of two variable non linear differential equation. These particular equations are also called <b>"lOTKA VOLTERRA EQUATIONS"</b>. According to these equations specifically,<br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>x is the number of prey<br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>y is the number of predator<br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>dx/dt and dy/dt represent the instantaneous growth rates of the two populations;<br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>t represents time;<br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>a,b,c,d are positive real parameters describing the interaction of the two species.</p></div>
      </div>
      <br/><br/>
      <div className="twovarsim">
        <p className="desc">To simulate these equations, enter the following values:</p>
        <br/>
        <br/>
        <br/>
        <TWOVARRSYS/> 
      </div>
      <br/>
      <br/>
      <br/>


      <pre className='twovar-header'><FontAwesomeIcon className="two-icon" icon={faCodeBranch}/> <div className="text">3-VARIABLE NON-LINEAR DIFFERENTIAL EQUATION</div></pre>
      <br/><br/><br/>
      <br/>
      <div className="twovarcont">
      <div className="twovarimg"><img src="/Users/ishaanmisra/Desktop/non_linear_differential_equation_sim/src/iodine_clock_reaction.png" alt="This is a 3 variable non linear differential equation."/></div>
      <div className="twovartext">
        <p className="desc">This is a basic example of three variable non linear differential equation. These particular equations are used in <b>"IODINE CLOCK REACTIONS"</b>. According to these equations specifically,
        <br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>x is the number of [I<sup>-</sup>]
        <br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>y is the number of [I<sub>3</sub><sup>-</sup>]
        <br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>z is the number of [S<sub>2</sub>O<sub>3</sub><sup>2-</sup>]
        <br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>dx/dt, dy/dt and dz/dt represent the instantaneous growth rates of the species;
        <br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>t represents time;
        <br/><FontAwesomeIcon className="two-icon" icon={faAngleRight}/>k1,k2,k3 are positive real parameters describing the interaction of the species.</p></div>
      </div>
      <br/><br/>
      <div className="twovarsim">
        <p className="desc">To simulate these equations, enter the following values:</p>
        <br/>
        <br/>
        <br/>
        <THREEVARRSYS/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default App;
