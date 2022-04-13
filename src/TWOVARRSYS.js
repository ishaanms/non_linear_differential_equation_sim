import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { TextField,Button } from '@material-ui/core';
import "/Users/ishaanmisra/Desktop/non_linear_differential_equation_sim-master/src/chartstyle.css";
import './App.css';
import TWOVARCHART from './TWOVARCHART';
const arrx=[];
const arry=[];


const TWOVARRSYS = () => {
  const [xval,setXval]=useState(100);
  const [yval,setYval]=useState(40);
  const [aval,setAval]=useState(0.5);
  const [bval,setBval]=useState(0.01);
  const [cval,setCval]=useState(0.5);
  const [dval,setDval]=useState(0.01);
  const xhandleChange = (event) => {
    setXval(event.target.value);
  }

  const yhandleChange = (event) => {
    setYval(event.target.value);
  }

  const ahandleChange = (event) => {
    setAval(event.target.value);
  }

  const bhandleChange = (event) => {
    setBval(event.target.value);
  }

  const chandleChange = (event) => {
    setCval(event.target.value);
  }

  const dhandleChange = (event) => {
    setDval(event.target.value);
  }
    return (
        <div>
          <div className="inputs">
            <div className="parameters">
              <p className="desc">x:</p><TextField id="outlined-basic"  onChange={xhandleChange} label="x" variant="outlined" />
              <p className="desc">y:</p><TextField id="outlined-basic" onChange={yhandleChange} label="y" variant="outlined" />
            </div>
            <div className="parameters">
              <p className="desc">&#945;:</p><TextField id="outlined-basic" onChange={ahandleChange} label="&#945;" variant="outlined" />
              <p className="desc">&#946;:</p><TextField id="outlined-basic" onChange={bhandleChange} label="&#946;" variant="outlined" />
              <p className="desc">&#947;:</p><TextField id="outlined-basic" onChange={chandleChange} label="&#947;" variant="outlined" />
              <p className="desc">&#948;:</p><TextField id="outlined-basic" onChange={dhandleChange} label="&#948;" variant="outlined" />
            </div>
          </div>
          <div className="sim">
            <p className="desc">The curve of the these equations with the data as :</p>
            <p className="desc"><b>x={xval}</b>, <b>y={yval}</b>, <b>&#945;={aval}</b>, <b>&#946;={bval}</b>, <b>&#947;={cval}</b>, <b>&#948;={dval}</b> looks like:</p>
          </div>
          <Button variant="outlined" size="large" onClick={()=>{
            console.log(xval,yval,aval,bval,cval,dval);
            document.getElementById('twovarchar').innerHTML=``;
            ReactDOM.render(
              <React.StrictMode>
                <TWOVARCHART pin={[xval,yval,aval,bval,cval,dval]}/>
              </React.StrictMode>,
              document.getElementById('twovarchar')
            );
            }}>
          CLICK TO GENERATE GRAPH
          </Button>
          <div id='twovarchar'></div>
          <br/>
        </div>
    )
}

export default TWOVARRSYS;
export {arrx};
export {arry};
