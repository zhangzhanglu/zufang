import React from 'react';
import Header from '../../components/Header/Header';
import HotCity from './HotCity/HotCity';
import {connect} from 'react-redux';
class City extends React.Component{
    render(){
        return(
            <div>
                <Header title={'城市选择'}/>
                {/* 当前城市 */}
                <h2 style={{'textAlign':'center','marginTop':'20px'}}>当前城市：{this.props.city}</h2>
                {/* 热门城市 */}
                <HotCity history = {this.props.history}/>
            </div>
        )
    }
}

export default connect((state)=>{
    return{
        city:state.city
        }
    })(City);