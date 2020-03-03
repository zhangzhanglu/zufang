import React from 'react';
//头部
import Header from '../../components/Header/Header';
//引入导航
import Nav from '../../components/Nav/Nav.jsx';
class Me extends React.Component{
    render(){
        return(
            <div>
                <Header title={'个人中心'}/>
                me
                <Nav/>
            </div>
        )
    }
}
export default Me;