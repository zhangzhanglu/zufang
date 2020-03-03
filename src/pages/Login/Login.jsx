import React from 'react';
import {connect} from 'react-redux';
import setUser from  '../../store/action/UserAction';
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username:''
        }
    }
    changeuser=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    login=()=>{
        this.props.setUser(this.state.username);
        this.props.history.goBack()
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.username} onChange={this.changeuser}/>
                <button onClick={this.login}>登录</button>
            </div>
        )
    }
}
export default connect(null,(dispatch)=>{
    return{
        setUser:(data)=>{
            dispatch(setUser(data))
        }
    }
})(Login) ;