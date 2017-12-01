import React from 'react';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import PasswordField from 'material-ui-password-field';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Signup from './Signup.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

const style = {
  margin: 12,
};

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      logged: "",
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state[e.target.name]);
  }

  logInUser(obj) {
    console.log('hello')
    if (this.state.password === this.state.password2) {
      alert('password dont match idiot')
    } else {
      axios.post('/login', {username: this.state.username, password: this.state.password})
        .then((res) => {
          this.setSatet({loggedIn: res.data});
        })
        .catch(() => { console.log('fail')})
    }
  }

  render() {
    return (
      <div>
        <h1 style={{margin: '35px'}}>Welcome</h1>
        <TextField
          floatingLabelText="Enter username"
          name="username"
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <PasswordField
          hintText="At least 8 characters"
          floatingLabelText="Enter your password"
          errorText="Your password is too short"
          name="password"
          onChange={this.handleChange.bind(this)}/>
        <br/>
        <br/>
        
        <RaisedButton label="Log In" primary={true} style={style} onClick={this.logInUser.bind(this)}/>

        <RaisedButton label="Sign Up" primary={true} style={style} containerElement={<Link to="/signup"/>}/>

        <br/>
        <Link to="/signup">Don't have an account?</Link>
        <br/>   
        <br/>
      </div>
    );
  }
}
export default Login;