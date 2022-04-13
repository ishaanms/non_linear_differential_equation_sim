import React,{useState} from 'react'
import { TextField,Button } from '@material-ui/core';
import ReactDOM from 'react-dom';
import THREEVARCHART from './THREEVARCHART';
const THREEVARRSYS = () => {
    const [txval,setTXval]=useState(1);
    const [tyval,setTYval]=useState(0);
    const [tzval,setTZval]=useState(0.5);
    const [taval,setTAval]=useState(0.08);
    const [tbval,setTBval]=useState(25);

    const txhandleChange = (event) => {
        setTXval(event.target.value);
    }

    const tyhandleChange = (event) => {
        setTYval(event.target.value);
    }

    const tzhandleChange = (event) => {
        setTZval(event.target.value);
    }

    const tahandleChange = (event) => {
        setTAval(event.target.value);
    }

    const tbhandleChange = (event) => {
        setTBval(event.target.value);
    }
    return (
        <div>
            <div className="inputs">
                <div className="parameters">
                    <p className="desc">x:</p><TextField id="outlined-basic"  onChange={txhandleChange} label="x" variant="outlined" />
                    <p className="desc">y:</p><TextField id="outlined-basic" onChange={tyhandleChange} label="y" variant="outlined" />
                    <p className="desc">z:</p><TextField id="outlined-basic" onChange={tzhandleChange} label="z" variant="outlined" />
                </div>
                <div className="parameters">
                    <p className="desc">k1:</p><TextField id="outlined-basic" onChange={tahandleChange} label="k1" variant="outlined" />
                    <p className="desc">k2:</p><TextField id="outlined-basic" onChange={tbhandleChange} label="k2" variant="outlined" />
                </div>
            </div>
            <div className="sim">
                <p className="desc">The curve of the these equations with the data as :</p>
                <p className="desc"><b>x={txval}</b>, <b>y={tyval}</b>, <b>z={tzval}</b>, <b>k1={taval}</b>, <b>k2={tbval}</b> looks like:</p>
            </div>
            <Button variant="outlined" size="large" onClick={()=>{
            document.getElementById('threevarchar').innerHTML=``;
            ReactDOM.render(
              <React.StrictMode>
                <THREEVARCHART pin={[txval,tyval,tzval,taval,tbval]}/>
              </React.StrictMode>,
              document.getElementById('threevarchar')
            );
            }}>
          CLICK TO GENERATE GRAPH
          </Button>
          <div id='threevarchar'></div>
        </div>
    )
}

export default THREEVARRSYS
