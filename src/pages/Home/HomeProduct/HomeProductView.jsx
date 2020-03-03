//木偶组件 只有页面结构
import React from 'react';
import './HomeProductView.less';
class HomeProductView extends React.Component{
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div className='HomeProduct-box'>
                <p className='HomeProduct-title'>{this.props.title}</p>
                <div className='HomeProduct-connect'>
                    { this.props.HomeProductArr.map((ele,index)=>{
                        return(
                            <div className='HomeProduct-item' key={index}>
                                <img src={ele.img} alt=''/>
                        <p>{ele.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
} 

export default HomeProductView ;