import React, {useState} from 'react';
import {HashRouter as Router , Route , Switch, Redirect} from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Help from './components/Help';


function App() {

  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [helpNum,setHelpNum] = useState('101');
  const [helpName,setHelpName] = useState('מגן דוד אדום');

  function sname(name,password){
  setName(name);
  setPassword(password);
  }

  function shelp(helpNum, helpName){
    setHelpNum(helpNum);
    setHelpName(helpName);
    }

  return (
    <div>
      <Router>
         <Switch>
            <Route exact path="/" render={() => (<SignUp sname={sname}/>)}/>
            <Route exact path={`/main/${name}`} render={() => (<Main shelp={shelp} name={name} />)}/>
            <Route exact path={`/help/${helpNum}`} render={() => (<Help helpNum={helpNum} helpName={helpName} name={name} password={password} />)}/>
            <Redirect to='/main' />
            </Switch> 
            </Router>
    </div>
  );
}

export default App;
