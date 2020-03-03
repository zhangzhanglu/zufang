import React from 'react';
import {link,withRouter} from 'react-router-dom';
import './Header.less';
class Header extends React.Component{
    goback=()=>{
        // console.log(this.props);
        this.props.history.goBack()
    }
    render(){
        return(
            <div className='Header-box'>
               <i onClick={this.goback} className='iconfont icon-fanhui'></i>
                <span className='Header-title'>{this.props.title}</span>
                <i></i>
            </div>
        )
    }
}
export default withRouter(Header);