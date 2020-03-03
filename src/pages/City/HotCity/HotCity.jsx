import React from 'react';
import './HotCity.less';
import {connect} from 'react-redux';
import setCity from '../../../store/action/CityAction.js';
class HotCity extends React.Component{
    constructor(){
        super()
        this.state={
            HotCityList:['北京','上海','天津','广州','杭州','深圳','沈阳','长沙','哈尔滨','重庆','苏州','海南','吉林','长春','黑龙江','广东']
        }
    }
    select=(e)=>{
        // console.log(e.target.innerHTML);
        this.props.setCity(e.target.innerHTML)
        this.props.history.goBack()

    }
    componentDidMount(){
        // console.log(this.props)
    }
    render(){
        return(
            <div className='HotCity-box'>
                <h3>热门城市</h3>
                <ul className='HotCity-ul'>
                    {this.state.HotCityList.map((ele,index)=>{
                    return <li onClick={this.select} className='HotCity-li' key={index}>{ele}</li>
                    })}
                </ul>
            </div>
        )
    }
}
//读取
const mapStateToProps = (state)=>{
    console.log(state)
    return{
        city:state.city
    }
}
//设置
const mapDispatchToProps = (dispatch)=>{
    return{
        'setCity':(data)=>{
            dispatch(setCity(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HotCity)