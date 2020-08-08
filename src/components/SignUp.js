import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function SignUp(props) {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [nameErr,setNameErr] = useState('');
    const [passwordErr,setPasswordErr] = useState('');

    function handleNameChange(e){
        const value = e.target.value;
        let c=0;
        let c2=0;
        for(let i=0;i<value.length;i++){
            if(value[i]<=9 && value[i]>=0){
                c++;
            }
            c2++;
        }
        if(c>0 || c2<4){
            setNameErr('השם שהזנת אינו עומד בדרישות')
        }else {
            setNameErr('');
        }
        setName(value);
    }

    function handlePasswordChange(e){
        const value = e.target.value;
        let c=0;
        let c2=0;
        for(let i=0;i<value.length;i++){
            if(value[i]>='A' && value[i]<='z'){
                c++;
            } else if(value[i]>=0 && value[i]<=9){
                c2++;
            }
        }
        if(c===0 || c2===0 || value.length<8){
            setPasswordErr('הסיסמא שהזנת אינה עומדת בדרישות')
        } else {
            setPasswordErr('');
        }
        setPassword(value);
    }
    return (
        <div className='container app'>
            <div className='row space'>
                
            </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 box'>
                <h2>הרשמה</h2>
            <Form dir='rtl'>
                <Form.Group className="row">
                <Form.Label className="errLbl">{nameErr}</Form.Label>
                    <Form.Control className="input" type="text" placeholder="שם מלא" onChange={handleNameChange} />
                    <div className="col-5"></div>
                </Form.Group>
                <Form.Group className="row">
                <Form.Label className="errLbl">{passwordErr}</Form.Label>
                    <Form.Control className="input" type="password" placeholder="סיסמא" onChange={handlePasswordChange}  />
                    <div className="col-3"></div>
                </Form.Group>
                <Link to={`/main/${name}`}><Button variant="secondary" onClick={()=>props.sname(name,password)}>כניסה</Button></Link>
                </Form>
                <h1>HelpMe!</h1>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
    );
}

export default SignUp;