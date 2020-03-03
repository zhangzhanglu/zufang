//底部导航
import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import './Nav.less';
//如果navlink不生效 手动添加active的方法 
class Nav extends React.Component{
    constructor(){
        super()
        this.state={
            now:''
        }
    }
    componentDidMount(){
        // console.log(this.props.location.pathname);
        this.setState({
            now:this.props.location.pathname
        })
    }
    render(){
        return(
            <div className='navbox'>
                <div className={this.state.now ==='/'?'active':''}> 
                    <NavLink to='/'  exact> 
                        <i className='iconfont icon-shouye'></i>
                        首页
                    </NavLink>
                </div>
                <div className={this.state.now==='/shop'?'active':''}>
                    <NavLink to='/shop'> 
                        <i className='iconfont icon-shangcheng'></i>
                        商城
                    </NavLink>
                </div>
                <div className={this.state.now==='/life'?'active':''}>
                    <NavLink to='/life'> 
                        <i className='iconfont icon-fuwu'></i>
                        服务
                    </NavLink>
                </div>
                <div className={this.state.now==='/me'?'active':''}>
                    <NavLink to='/me'> 
                        <i className='iconfont icon-tubiaozhizuomoban'></i>
                        我的
                    </NavLink>
                </div>
               
 
            
                 
            </div>
        )
    }
}
export default withRouter(Nav);