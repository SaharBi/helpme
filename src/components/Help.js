import React,{useState} from 'react';
import {Form, Button } from 'react-bootstrap';
import { Redirect} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function Help(props) {
    const [isShow, setIsShow] = useState(false);
    const [cancelClickCounter, setCancelClickCounter] = useState(0);
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [redirect2, setRedirect2] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    if (redirect2) {
        return <Redirect push to={`/main/${props.name}`} />;
    }
    function handleCancelClick(){
        setCancelClickCounter(cancelClickCounter+1);
        setIsShow(true);
    }
    function handleFirstPasswordChange(e){
        let value = e.target.value;
        setFirstPassword(value);
    }
    function handleSecondPasswordChange(e){
        let value = e.target.value;
        setSecondPassword(value);
    }
    function handleFinalCancel(){
        if(firstPassword === secondPassword && firstPassword === props.password){
            setRedirect2(true);
        } else if(cancelClickCounter<3){
            alert('הסיסמא שהזנת שגויה')
            setIsShow(false);
        } else {
            setDisableBtn(true);
            setIsShow(false);
        }
    }
    var cancel = '';
    if(isShow){
        cancel =  <Form dir='rtl'>
        <Form.Group className="row">
            <Form.Control className="input" type="password" placeholder="סיסמא" onChange={handleFirstPasswordChange}  />
            <div className="col-3"></div>
        </Form.Group>
        <Form.Group className="row">
            <Form.Control className="input" type="password" placeholder="אישור סיסמא" onChange={handleSecondPasswordChange} />
            <div className="col-3"></div>
        </Form.Group>
        <Button id='cancel' variant="secondary" onClick={handleFinalCancel}>ביטול סופי</Button>
        </Form>
    }
    var cancelBtn = <Button variant="secondary" onClick={handleCancelClick}>ביטול</Button>;
    if(disableBtn){
        cancelBtn = <Button disabled variant="secondary" onClick={handleCancelClick}>ביטול</Button>;
    }
    return (
        <div>
        <div className='container app'>
        <div className='row space'>
                
                </div>
 <div className='row'>
     <div className='col-4'></div>
     <div className='col-4 box'>
         <div className='row nav'>
             <div className='col-6'><h2>{props.helpNum}</h2></div>
             <div className='col-6'>
             <Dropdown>
  <Dropdown.Toggle variant="scondary" id="dropdown-basic">
    Menu
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item value='A 101' style={{backgroundColor: 'gray'}}>A 101</Dropdown.Item>
    <Dropdown.Item value='B 100' style={{backgroundColor: 'gray'}}>B 100</Dropdown.Item>
    <Dropdown.Item value='C 102' style={{backgroundColor: 'gray'}}>C 102</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
             </div>
         </div>
         <div className='infoBox'>
         {props.helpName} {props.helpNum} <br />
            {props.name}
            </div>
            <br />
            {cancelBtn}
            {cancel}
     <h1>HelpMe!</h1>
     </div>
     <div className='col-4'></div>
 </div>
</div>
</div>
    );
}

export default Help;