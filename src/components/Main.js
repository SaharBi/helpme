import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function Main(props) {
    const [helpNum, setHelpNum] = useState('A 101');
    const [bg101,setBg101] = useState('gray');
    const [bg100,setBg100] = useState('gray');
    const [bg102,setBg102] = useState('gray');
    const [helpName,setHelpName] = useState('מגן דוד אדום');
    return (
        <div>
                   <div className='container app'>
                   <div className='row space'>
                
                </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 box'>
                    <div className='row nav'>
                        <div className='col-6'><h2>{helpNum}</h2></div>
                        <div className='col-6'>
                        <Dropdown>
  <Dropdown.Toggle variant="scondary" id="dropdown-basic">
    Menu
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item value='A 101' style={{backgroundColor: bg101}} onClick={()=>{
        setHelpNum('A 101');
        setBg101('lightgray')
        setBg100('gray');
        setBg102('gray');
        setHelpName('מגן דוד אדום');
    }}>A 101</Dropdown.Item>
    <Dropdown.Item value='B 100' style={{backgroundColor: bg100}} onClick={()=>{
        setHelpNum('B 100');
        setBg101('gray')
        setBg100('lightgray');
        setBg102('gray');
        setHelpName('משטרה');
    }}>B 100</Dropdown.Item>
    <Dropdown.Item value='C 102' style={{backgroundColor: bg102}} onClick={()=>{
        setHelpNum('C 102');
        setBg101('gray')
        setBg100('gray');
        setBg102('lightgray');
        setHelpName('כיבוי והצלה');
    }}>C 102</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                        </div>
                    </div>
                    <Link to={`/help/${helpNum}`}><button id='helpBtn' onClick={()=>props.shelp(helpNum,helpName)}>הצילו</button></Link>
                <h1>HelpMe!</h1>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
        </div>
    );
}

export default Main;